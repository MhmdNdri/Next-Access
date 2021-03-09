import React from "react";
import { useForm } from "react-hook-form";
import Styles from "../../styles/Form.module.css";
const reactHookForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={Styles.container}>
      <form className={Styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={Styles.input}
          placeholder="Name"
          name="firstname"
          ref={register}
        />{" "}
        {/* register an input */}
        <input
          className={Styles.input}
          placeholder="Last Name"
          name="lastname"
          ref={register({ required: true })}
        />
        {errors.lastname && "Last name is required."}
        <input
          className={Styles.input}
          placeholder="Age"
          name="age"
          ref={register({ pattern: /\d+/ })}
        />
        {errors.age && "Please enter number for age."}
        <input className={Styles.onSubmit} type="submit" />
      </form>
    </div>
  );
};

export default reactHookForm;
