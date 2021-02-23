import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Snackbar, Button } from "@material-ui/core";
import { Workbox } from "workbox-window";
import { useRouter } from "next/router";
import Modal from "react-modal";
import { motion } from "framer-motion";
import Rates from "../components/rates";

// import { registerRoute } from "workbox-routing";
// import { StaleWhileRevalidate } from "workbox-strategies";
// import { BroadcastUpdatePlugin } from "workbox-broadcast-update";

const currencies = ["CAD", "USD"];

export default function Home() {
  const [isOpen, setIsOpen] = useState(null);
  useEffect(() => {
    console.log(window.location.href + `?modal=true`);
    if (isOpen === true) {
      // location.replace();
      history.pushState({}, null, window.location.href + `?modal=true`);
    } if else (isOpen===false) {
      // location.replace(window.location.href.split(`?modal=true`)[0]);
      history.pushState({}, null, window.location.href.split(`?modal=true`)[0]);
    }
  }, [isOpen]);
  useEffect(() => {
    console.log(window.location.href);
  }, []);
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: { duration: 5 },
  };

  const router = useRouter();
  const { currencyCode } = router.query;
  return (
    <div className={styles.container}>
      {currencies.map((currency) => (
        // <Link
        //   key={currency}
        //   // href={`/?currencyCode=${currency}`}
        //   // as={`/currency/${currency}`}
        // >

        // </Link>
        <div key={currency}>
          <button onClick={() => setIsOpen(true)} className={styles.btn}>
            {currency}
          </button>
        </div>
      ))}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <Link href="/location">
          <button className={styles.btn}>Your Location</button>
        </Link>
      </motion.div>
      <Link href="/camera">
        <button className={styles.btn}>Your Camera</button>
      </Link>
      <Link href="/mic">
        <button className={styles.btn}>Your Microphone</button>
      </Link>
      <Link href="/totext">
        <button className={styles.btn}>Speech to Text</button>
      </Link>
      <Link href="/bluetooth">
        <button className={styles.btn}>Bluetooth</button>
      </Link>
      <Link href="/share">
        <button className={styles.btn}>Share</button>
      </Link>
      <Link href="/notification">
        <button className={styles.btn}>Notification</button>
      </Link>
      <Link href="/clipboard">
        <button className={styles.btn}>ClipBoard</button>
      </Link>
      <Link href="/vibration">
        <button className={styles.btn}>Vibration</button>
      </Link>
      <Link href="/battery">
        <button className={styles.btn}>Battery</button>
      </Link>
      <Link href="/bgSyncTest">
        <button className={styles.btn}>bgSync</button>
      </Link>
      <Link href="/images">
        <button className={styles.btn}>Images</button>
      </Link>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(!isOpen)}>
        <Rates currencyCode={router.query.currencyCode} />
      </Modal>
    </div>
  );
}
