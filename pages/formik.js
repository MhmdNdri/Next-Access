import React from "react";
import Styles from "../styles/Form.module.css";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "It's Empty ";
  } else if (values.firstName.length > 15) {
    errors.firstName = "It must be more than 15 characters";
  }
  if (!values.lastName) {
    errors.lastName = "It's Empty ";
  } else if (values.lastName.length > 20) {
    errors.lastName = "It must be more than 15 characters";
  }
  if (!values.email) {
    errors.email = "It's Empty ";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const formikForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={Styles.container}>
      <form className={Styles.form} onSubmit={formik.handleSubmit}>
        <input
          className={Styles.input}
          id="firstName"
          name="firstName"
          type="text"
          placeholder="first name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
        <input
          className={Styles.input}
          id="lastName"
          name="lastName"
          type="text"
          placeholder="last name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.lastName && formik.touched.firstName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}

        <input
          className={Styles.input}
          id="email"
          name="email"
          type="email"
          placeholder="Email Address"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.lastName && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <button className={Styles.onSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default formikForm;
