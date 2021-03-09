import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { Snackbar, Button } from "@material-ui/core";
// import { Workbox } from "workbox-window";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/modals">
        <button className={styles.btn}>Modals</button>
      </Link>
      <Link href="/forms">
        <button className={styles.btn}>Forms</button>
      </Link>
      <Link href="/what-web-can-do">
        <button className={styles.btn}>What Web Can Do?</button>
      </Link>

      <Link href="/swipe">
        <button className={styles.btn}>Swipe</button>
      </Link>

      <Link href="/todo-list">
        <button className={styles.btn}>TodoList</button>
      </Link>
      <Link href="/other-tools">
        <button className={styles.btn}>Others</button>
      </Link>
    </div>
  );
}
