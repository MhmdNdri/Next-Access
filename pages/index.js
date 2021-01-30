
import styles from '../styles/Home.module.css'
import Link from "next/link"
// import ReactNotifications from 'react-notifications-component';
export default function Home() {

  return (
    <div className={styles.container}>
      {/* <ReactNotifications /> */}

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
      <Link href="/notification">
        <button className={styles.btn}>Notification</button>
      </Link>
      <Link href="/clipboard">
        <button className={styles.btn}>ClipBoard</button>
      </Link>
      <Link href="/share">
        <button className={styles.btn}>Share</button>
      </Link>
      <Link href="/vibration">
        <button className={styles.btn}>Vibration</button>
      </Link>
      <Link href="/bluetooth">
        <button className={styles.btn}>Bluetooth</button>
      </Link>
    </div>
  )
}
