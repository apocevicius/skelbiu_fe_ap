import { useFormik } from 'formik';
import React from 'react';

function NewListingForm() {
  const formik = useFormik({
    initialValues: {
      title: '',
      mainImage: '',
    },
    onSubmit: (values) => {
      // console.log('values ===', values);

      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('mainImage', values.mainImage);
      console.log(formData);

      fetch('http://localhost:5000/api/auth/new-listing', {
        method: 'POST',
        body: formData,
      })
        .then((resp) => resp.text())
        .then((data) => console.log(data));
    },
  });

  // console.log('formik values ===', formik.values);
  return (
    <div className='w-50'>
      <h2>New Listing</h2>

      <form onSubmit={formik.handleSubmit}>
        <input
          className='form-control'
          value={formik.values.title}
          onChange={formik.handleChange}
          type='text'
          name='title'
          placeholder='name'
        />
        <br />
        <input
          onChange={(e) => formik.setFieldValue('mainImage', e.target.files[0])}
          className='form-control'
          type='file'
          name='mainImage'
        />
        <button className='btn btn-primary' type='submit'>
          Add
        </button>
      </form>
    </div>
  );
}

export default NewListingForm;
