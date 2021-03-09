import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const whatWebCanDo = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: { duration: 5 },
  };

  return (
    <div className={styles.container}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <Link href="/what-web-can-do/location">
          <button className={styles.btn}>Your Location</button>
        </Link>
      </motion.div>
      <Link href="/what-web-can-do/camera">
        <button className={styles.btn}>Your Camera</button>
      </Link>
      <Link href="/what-web-can-do/mic">
        <button className={styles.btn}>Your Microphone</button>
      </Link>
      <Link href="/what-web-can-do/totext">
        <button className={styles.btn}>Speech to Text</button>
      </Link>
      <Link href="/what-web-can-do/bluetooth">
        <button className={styles.btn}>Bluetooth</button>
      </Link>
      <Link href="/what-web-can-do/share">
        <button className={styles.btn}>Share</button>
      </Link>
      <Link href="/what-web-can-do/notification">
        <button className={styles.btn}>Notification</button>
      </Link>
      <Link href="/what-web-can-do/clipboard">
        <button className={styles.btn}>ClipBoard</button>
      </Link>
      <Link href="/what-web-can-do/vibration">
        <button className={styles.btn}>Vibration</button>
      </Link>
      <Link href="/what-web-can-do/battery">
        <button className={styles.btn}>Battery</button>
      </Link>
      <Link href="/what-web-can-do/bgSyncTest">
        <button className={styles.btn}>bgSync</button>
      </Link>
    </div>
  );
};

export default whatWebCanDo;
