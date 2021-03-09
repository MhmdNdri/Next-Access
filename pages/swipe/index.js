import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const swipe = () => {
  return (
    <div className={styles.container}>
      <Link href="/swipe/swipe">
        <button className={styles.btn}>SwipeJs</button>
      </Link>
      <Link href="/swipe/swiper">
        <button className={styles.btn}>Swiper</button>
      </Link>
      <Link href="/swipe/swipeable">
        <button className={styles.btn}>Swipeable</button>
      </Link>
      <Link href="/swipe/swipable-view">
        <button className={styles.btn}>Swipeable-views</button>
      </Link>
      <Link href="/swipe/react-id-swiper ">
        <button className={styles.btn}>React-Id-Swiper </button>
      </Link>
      <Link href="/swipe/react-swipe">
        <button className={styles.btn}>React-Swipe</button>
      </Link>
    </div>
  );
};

export default swipe;
