import React, { useState, useEffect } from "react";
import styles from "../../styles/Otp.module.css";
import axios from "axios";
import Link from "next/link";
import OtpInput from "react-otp-input";

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
          {/* <input
            className={styles.input}
            type="text"
            autocomplete="one-time-code"
            inputMode="numeric"
            name="one-time-code"
            value={validation}
            onChange={(e) => setValidationNumber(e.target.value)}
            pattern="\d{4}"
            required
          /> */}
          <OtpInput
            value={validation}
            onChange={(e) => setValidationNumber(e.target.value)}
            numInputs={4}
            separator={<span>-</span>}
            autoComplete="one-time-code"
            shouldAutoFocus={true}
            focusStyle="true"
          />
          <input className={styles.onSubmit} type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default validate;
