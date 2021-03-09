import styles from "../styles/Main.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { Snackbar, Button } from "@material-ui/core";
// import { Workbox } from "workbox-window";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/what-web-can-do">
        <button className={styles.btn}>
          <span className={styles.btnText}>What</span>
          <span className={styles.btnText}>Web</span>
          <span className={styles.btnText}>Can</span>
          <span className={styles.btnText}>Do</span>
          <span className={styles.btnText}>?</span>
        </button>
      </Link>
      <Link href="/modals">
        <button className={styles.btn}>
          <span className={styles.btnText}>M</span>
          <span className={styles.btnText}>O</span>
          <span className={styles.btnText}>D</span>
          <span className={styles.btnText}>A</span>
          <span className={styles.btnText}>L</span>
          <span className={styles.btnText}>S</span>
        </button>
      </Link>
      <Link href="/forms">
        <button className={styles.btn}>
          <span className={styles.btnText}>F</span>
          <span className={styles.btnText}>O</span>
          <span className={styles.btnText}>R</span>
          <span className={styles.btnText}>M</span>
          <span className={styles.btnText}>S</span>
        </button>
      </Link>

      <Link href="/swipe">
        <button className={styles.btn}>
          <span className={styles.btnText}>S</span>
          <span className={styles.btnText}>W</span>
          <span className={styles.btnText}>I</span>
          <span className={styles.btnText}>P</span>
          <span className={styles.btnText}>E</span>
        </button>
      </Link>

      <Link href="/todo-list">
        <button className={styles.btn}>
          <span className={styles.btnText}>Todo</span>
          <span className={styles.btnText}>List</span>
        </button>
      </Link>
      <Link href="/other-tools">
        <button className={styles.btn}>
          <span className={styles.btnText}>Others</span>
        </button>
      </Link>
    </div>
  );
}
