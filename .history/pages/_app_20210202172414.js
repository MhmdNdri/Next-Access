
import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js")
        .then(function (registration) {
            console.log("Service Worker registered with scope:", 
                         registration.scope);
        }).catch(function (err) {
        console.log("Service worker registration failed:", err);
    });
}
  return (
    <>
      <Head>
        <title>Accessibilty</title>
        <base href="/pwa-sample/" />
        <link rel="icon" href="tools.png" />
        <link rel="manifest" href="manifest.json" />
        <meta name="theme-color" content="#317EFB" />
      </Head>

      <Component {...pageProps} />
    </>)
}



export default MyApp
