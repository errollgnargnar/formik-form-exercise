import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email';
      }

      if (!values.password) {
        errors.password = 'Field required';
      }

      return errors;
    },
    onSubmit: values => {
      alert('Login Successful');
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="emailField"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div id="emailError">{formik.errors.email}</div> : null}

      <label htmlFor="password">Password</label>
      <input
        id="pswField"
        name="password"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.password}
      />    
      {formik.errors.password ? <div id="pswError">{formik.errors.password}</div> : null}

      <button type="submit" id="submitBtn">Submit</button>

    </form>
  );
}

export default App;
