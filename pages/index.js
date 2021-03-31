import styles from "../styles/Main.module.css";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "tailwindcss/tailwind.css";

import "aos/dist/aos.css";

// import { Snackbar, Button } from "@material-ui/core";
// import { Workbox } from "workbox-window";

export default function Home() {
  const [session, loading] = useSession();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.container}>
      {!session ? (
        <div className="flex felx-col flex-col items-center text-center justify-center">
          <h1 className="xl:text-10xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-sans mb-60 font-bold text-yellow-900 flex-start">
            {" "}
            Welcome To This Project
          </h1>
          <h2 className="xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl px-10 text-2xl  mb-6 text-yellow-400">
            At first you must Sign in to see what is going on on this site
          </h2>
          <h3 className="font-mono text-lg mb-3">
            Click the button below to Sign In
          </h3>
          <button
            onClick={() => signIn("google")}
            className="flex outline-none items-center bg-[#e50914] text-white text-base mt-3 font-bold px-5 py-4 rounded-lg"
          >
            Sign In
          </button>
        </div>
      ) : (
        <>
          <button
            onClick={() => signOut()}
            className="flex outline-none items-center bg-[#e50914] text-white text-sm px-4 py-2 rounded"
          >
            Sign Out
          </button>

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
        </>
      )}
      {/* <h1 className={styles.headerText}> Welcome To This Project</h1> */}
    </div>
  );
}
