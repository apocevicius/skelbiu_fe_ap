import { useFormik } from 'formik';
import { useState } from 'react';
// import toast from 'react-hot-toast';
import * as Yup from 'yup';
import css from './RegisterForm.module.css';

function RegisterForm() {
  const [formSentSuccess, setFormSentSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
      mainImage: '',
    },

    validationSchema: Yup.object({
      email: Yup.string().min(6).max(25).required('This field is required'),
      password: Yup.string().min(6).required('This field is required'),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('This field is required'),
    }),

    onSubmit: async (values) => {
      // const resp = await fetch('http://localhost:3000/register', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(values),
      // });
      console.log('values ===', values);
      // const data = await resp.json();

      // if (data.error) {
      //   toast.error('Please check the form');
      // }
      // if (data.msg) {
      //   toast.success('Successfully registered');
      //   setFormSentSuccess(true);
      // }
    },
  });
  console.log(formik.values);
  console.log(formik.errors);

  return (
    <div className='container'>
      <div className={css.topSeparate}>
        {formSentSuccess ? (
          <h2 className={css.container}>You have successfully registered</h2>
        ) : (
          <div className={css.container}>
            <form onSubmit={formik.handleSubmit} className={css.form}>
              <input
                id="'email"
                name='email'
                placeholder='Email'
                type='text'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && formik.errors.email}
              />
              <span>{formik.errors.email}</span>
              <input
                id="'password"
                name='password'
                placeholder='Password'
                type='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                error={formik.touched.password && formik.errors.password}
              />
              <input
                id='repeatPassword'
                name='repeatPassword'
                placeholder='Repeat password'
                type='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.repeatPassword}
                error={
                  formik.touched.repeatPassword && formik.errors.repeatPassword
                }
              />
              <input
                onChange={(e) =>
                  formik.setFieldValue('mainImage', e.target.files[0])
                }
                className='form-control'
                type='file'
                name='mainImage'
              />
              <button type='submit'>REGISTER</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default RegisterForm;
