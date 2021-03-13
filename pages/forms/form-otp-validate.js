import React, { useState, useEffect } from "react";
import styles from "../../styles/Otp.module.css";
import axios from "axios";
import Link from "next/link";
const validate = () => {
  const [validation, setValidationNumber] = useState(null);
  useEffect(() => {
    if ("OTPCredential" in window) {
      const input = document.querySelector(
        'input[autoComplete="one-time-code"]'
      );
      if (input) {
        navigator.credentials
          .get({
            otp: { transport: ["sms"] },
          })
          .then((otp) => (input.value = otp.code));
      }
    }
  });
  return (
    <div>
      <div className={styles.container}>
        <p className={styles.p}>Enter the number that you get from SMS</p>
        <form className={styles.form} action="/verify-otp" method="post">
          <input
            type="text"
            autoComplete="one-time-code"
            inputMode="numeric"
            value={validation}
            onChange={(e) => setValidationNumber(e.target.value)}
            required
          />
          <input className={styles.onSubmit} type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default validate;
