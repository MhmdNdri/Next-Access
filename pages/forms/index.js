import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const forms = () => {
  return (
    <div className={styles.container}>
      <Link href="/forms/react-hook-form">
        <button className={styles.btn}>React-hook-form</button>
      </Link>
      <Link href="/forms/formik">
        <button className={styles.btn}>Formik</button>
      </Link>
      <Link href="/forms/form-otp">
        <button className={styles.btn}>Form For OTP</button>
      </Link>
    </div>
  );
};

export default forms;
