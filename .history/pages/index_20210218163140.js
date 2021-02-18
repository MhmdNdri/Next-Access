import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Snackbar, Button } from "@material-ui/core";
// import ReactNotifications from 'react-notifications-component';

export default function Home() {
  const [showReload, setShowReload] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState(null);

  const onSWUpdate = (registration) => {
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  };
  useEffect(() => {
    navigator.serviceWorker.register({ onUpdate: onSWUpdate });
  }, []);
  const reloadPage = () => {
    waitingWorker?.postMessage({ type: "SKIP_WAITING" });
    setShowReload(false);
    window.location.reload(true);
  };

  useEffect(() => {
    navigator.serviceWorker.register("/pwa-sample/service-worker.js");
    self.addEventListener("message", (event) => {
      if (event.data && event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
      }
    });
    if ("serviceWorker" in navigator) {
      // Use the window load event to keep the page load performant
      window.addEventListener("load", () => {
        window.navigator.serviceWorker.register(
          "/pwa-sample/service-worker.js"
        );
      });
    }
  });

  return (
    <div className={styles.container}>
      {/* <ReactNotifications /> */}
      <Snackbar
        open={showReload}
        message="A new version is available!"
        onClick={reloadPage}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        action={
          <Button color="inherit" size="small" onClick={reloadPage}>
            Reload
          </Button>
        }
      />
      {/* <h1 className={styles.title}>
        Choose the tool you want
      </h1> */}

      <Link href="/location">
        <button className={styles.btn}>Your Location</button>
      </Link>
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
    </div>
  );
}
