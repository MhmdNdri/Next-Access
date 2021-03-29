import styles from "../styles/Main.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// import { Snackbar, Button } from "@material-ui/core";
// import { Workbox } from "workbox-window";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className={styles.container}>
      {/* <h1 className={styles.headerText}> Welcome To This Project</h1> */}
      <Link href="/what-web-can-do">
        <button data-aos="zoom-in-right" className={styles.btn}>
          <span data-aos="fade-right" className={styles.btnText}>
            What
          </span>
          <span data-aos="fade-left" className={styles.btnText}>
            Web
          </span>
          <span data-aos="fade-right" className={styles.btnText}>
            Can
          </span>
          <span data-aos="fade-left" className={styles.btnText}>
            Do
          </span>
          <span data-aos="fade-right" className={styles.btnText}>
            ?
          </span>
        </button>
      </Link>
      {/* <Link href="/modals">
        <button
          data-aos="fade-up"
          data-aos-duration="3000"
          className={styles.btn}
        >
          <span className={styles.btnText}>M</span>
          <span className={styles.btnText}>O</span>
          <span className={styles.btnText}>D</span>
          <span className={styles.btnText}>A</span>
          <span className={styles.btnText}>L</span>
          <span className={styles.btnText}>S</span>
        </button>
      </Link> */}
      <Link href="/forms">
        <button data-aos="zoom-in" className={styles.btn}>
          <span data-aos="fade-down" className={styles.btnText}>
            F
          </span>
          <span data-aos="fade-down" className={styles.btnText}>
            O
          </span>
          <span className={styles.btnText}>R</span>
          <span data-aos="fade-up" className={styles.btnText}>
            M
          </span>
          <span data-aos="fade-up" className={styles.btnText}>
            S
          </span>
        </button>
      </Link>

      <Link href="/swipe">
        <button data-aos="zoom-in" className={styles.btn}>
          <span data-aos="zoom-in-right" className={styles.btnText}>
            S
          </span>
          <span data-aos="zoom-in-left" className={styles.btnText}>
            W
          </span>
          <span data-aos="zoom-in-right" className={styles.btnText}>
            P
          </span>
          <span data-aos="zoom-in-left" className={styles.btnText}>
            I
          </span>
          <span data-aos="zoom-in-right" className={styles.btnText}>
            E
          </span>
        </button>
      </Link>

      <Link href="/todo-list">
        <button
          data-aos="fade-down"
          data-aos-duration="3000"
          className={styles.btn}
        >
          <span data-aos="fade-down" className={styles.btnText}>
            Todo
          </span>
          <span data-aos="fade-up" className={styles.btnText}>
            List
          </span>
        </button>
      </Link>
      <Link href="/other-tools">
        <button data-aos="zoom-in-left" className={styles.btn}>
          <span data-aos="zoom-in" className={styles.btnText}>
            Others
          </span>
        </button>
      </Link>
    </div>
  );
}
