import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Snackbar, Button } from "@material-ui/core";
import { Workbox } from "workbox-window";
import { motion } from "framer-motion";
// import { registerRoute } from "workbox-routing";
// import { StaleWhileRevalidate } from "workbox-strategies";
// import { BroadcastUpdatePlugin } from "workbox-broadcast-update";

export default function Home() {
  // const [showReload, setShowReload] = useState(false);
  // const [waitingWorker, setWaitingWorker] = useState(null);

  // const onSWUpdate = (registration) => {
  //   setShowReload(true);
  //   setWaitingWorker(registration.waiting);
  // };
  // useEffect(() => {
  //   navigator.serviceWorker.register({ onUpdate: onSWUpdate });
  // }, []);
  // const reloadPage = () => {
  //   waitingWorker?.postMessage({ type: "SKIP_WAITING" });
  //   setShowReload(false);
  //   window.location.reload(true);
  // };
  // useEffect(() => {
  //   navigator.serviceWorker.register("/service-worker.js");
  //   self.addEventListener("message", (event) => {
  //     if (event.data && event.data.type === "SKIP_WAITING") {
  //       self.skipWaiting();
  //     }
  //   });
  // });
  // useEffect(() => {
  //   registerRoute(
  //     ({ url }) => url.pathname.startsWith("/pwa-sample/"),
  //     new StaleWhileRevalidate({
  //       plugins: [new BroadcastUpdatePlugin()],
  //     })
  //   );
  // });
  // useEffect(() => {
  //   const wb = new Workbox("/sw.js");

  //   wb.addEventListener("installed", (event) => {
  //     if (event.isUpdate) {
  //       // Show “Update App” banner
  //     }
  //   });

  //   wb.register();
  // });
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
      <Link href="/test">
        <button className={styles.btn}>test</button>
      </Link>
      <Link href="/testt">
        <button className={styles.btn}>test2</button>
      </Link>
    </div>
  );
}
