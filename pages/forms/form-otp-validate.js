import React, { useState, useEffect } from "react";
import styles from "../../styles/Otp.module.css";
import axios from "axios";
import Link from "next/link";
const validate = () => {
  const [validation, setValidationNumber] = useState(null);
  useEffect(() => {
    if ("OTPCredential" in window) {
      window.addEventListener("DOMContentLoaded", (e) => {
        const input = document.querySelector(
          'input[autocomplete="one-time-code"]'
        );
        if (!input) return;
        // Cancel the Web OTP API if the form is submitted manually.
        const ac = new AbortController();
        const form = input.closest("form");
        if (form) {
          form.addEventListener("submit", (e) => {
            // Cancel the Web OTP API.
            ac.abort();
          });
        }
        // Invoke the Web OTP API
        navigator.credentials
          .get({
            otp: { transport: ["sms"] },
            signal: ac.signal,
          })
          .then((otp) => {
            input.value = otp.code;
            // Automatically submit the form when an OTP is obtained.
            if (form) form.submit();
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  });
  return (
    <div>
      <div className={styles.container}>
        <p className={styles.p}>Enter the number that you get from SMS</p>
        <form className={styles.form} action="/verify-otp" method="post">
          <input
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
