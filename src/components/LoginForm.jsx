import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useAuthContext } from '../store/AuthContext';
import css from './LoginForm.module.css';

function LoginForm() {
  const history = useHistory()
  const {login} = useAuthContext
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .min(4, 'min 4 characters')
        .max(15, 'max 15 characters')
        .required(),
      password: Yup.string()
        .min(4, 'min 4 characters')
        .max(15, 'max 15 characters')
        .required(),
    }),
    onSubmit: (values) => {
      console.log('Form data', values);
      handleSubmit(values.email, values.password);
    },
  });

  const handleSubmit = async (email, password) => {
    const resp = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await resp.json();
    const { token, email: user } = data.data;

    if (login(token, user)) {
      history.replace('/ads')
    }
  };

  return (
    <section className={css.loginFormContainer}>
      <form className={css.loginForm} onSubmit={formik.handleSubmit}>
        <input
          name='email'
          id='email'
          placeholder='Email'
          type='text'
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <input
          name='password'
          id='password'
          placeholder='password'
          type='password'
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <button type='submit'>Login</button>
      </form>
    </section>
  );
}

export default LoginForm;
