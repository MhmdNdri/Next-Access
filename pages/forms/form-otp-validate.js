import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/Otp.module.css";
import axios from "axios";
import Link from "next/link";
const validate = () => {
  const [validation, setValidationNumber] = useState(null);
  const inputRef = useRef(null);

  console.log(inputRef.current);
  useEffect(() => {
    // if ("OTPCredential" in window) {
    //   const input = inputRef.current;
    //   if (input) {
    //     navigator.credentials
    //       .get({
    //         otp: { transport: ["sms"] },
    //       })
    //       .then((otp) => (input.value = otp.code));
    //   }
    // }
    navigator.credentials
      .get({
        otp: { transport: ["sms"] },
      })
      .then((otp) => setValidationNumber(otp.code));
  });
  return (
    <div>
      <div className={styles.container}>
        <p className={styles.p}>Enter the number that you get from SMS</p>
        <form className={styles.form} action="/verify-otp" method="post">
          <input
            ref={inputRef}
            className={styles.input}
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
