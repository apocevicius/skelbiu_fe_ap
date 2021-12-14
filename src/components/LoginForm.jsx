import { useFormik } from 'formik';
import * as Yup from 'yup';
import css from './LoginForm.module.css';

function LoginForm() {
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
    },
  });

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
