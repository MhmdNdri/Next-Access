import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"
// import ReactNotifications from 'react-notifications-component';
export default function Home() {

  return (
    <div className={styles.container}>
      {/* <ReactNotifications /> */}
      <Head>
        <title>Accessibilty</title>
        <link rel="icon" href="/tools.png" />
        <link rel="manifest" href="./manifest.json" />
        <meta name='application-name' content='PWA App' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='PWA App' />
        <meta name='description' content='Best PWA App in the world' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='#2B5797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#000000' />

        <link rel='apple-touch-icon' sizes='180x180' href='/static/icons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/static/icons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/static/icons/favicon-16x16.png' />
        <link rel='manifest' href='/static/manifest.json' />
        <link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#5bbad5' />
        <link rel='shortcut icon' href='/static/icons/favicon.ico' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='https://yourdomain.com' />
        <meta name='twitter:title' content='PWA App' />
        <meta name='twitter:description' content='Best PWA App in the world' />
        <meta name='twitter:image' content='https://yourdomain.com/static/icons/android-chrome-192x192.png' />
        <meta name='twitter:creator' content='@DavidWShadow' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='PWA App' />
        <meta property='og:description' content='Best PWA App in the world' />
        <meta property='og:site_name' content='PWA App' />
        <meta property='og:url' content='https://yourdomain.com' />
        <meta property='og:image' content='https://yourdomain.com/static/icons/apple-touch-icon.png' />
      </Head>

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
    </div>
  )
}
