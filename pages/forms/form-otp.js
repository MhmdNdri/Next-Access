import React from "react";
import styles from "../../styles/Otp.module.css";
const formOTP = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <p className={styles.p}>Please enter your Phone Number</p>
        <input
          className={styles.input}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          required
        />
        <button className={styles.onSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default formOTP;
