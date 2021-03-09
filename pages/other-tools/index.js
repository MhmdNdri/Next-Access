import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const index = () => {
  return (
    <div className={styles.container}>
      <Link href="/other-tools/images">
        <button className={styles.btn}>Images</button>
      </Link>
      <Link href="/other-tools/puppeteer">
        <button className={styles.btn}>Puppeteer</button>
      </Link>
    </div>
  );
};

export default index;
