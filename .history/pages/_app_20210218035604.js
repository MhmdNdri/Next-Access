import "../styles/globals.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Snackbar, Button } from "@material-ui/core";
import { Workbox } from "workbox-window";

function MyApp({ Component, pageProps }) {
  const [showReload, setShowReload] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState([]);

  const onSWUpdate = (registration) => {
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  };

  const reloadPage = () => {
    waitingWorker?.postMessage({ type: "SKIP_WAITING" });
    setShowReload(false);
    window.location.reload(true);
  };
  useEffect(() => {
    serviceWorker.register({ onUpdate: onSWUpdate });
  }, []);
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
    <>
      <Head>
        <title>Accessibilty</title>
        <base href="/pwa-sample/" />
        <link rel="icon" href="tools.png" />
        <link rel="manifest" href="manifest.json" />
        <meta name="theme-color" content="#317EFB" />
        <meta name="application-name" content="PWA App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PWA App" />
        <meta name="description" content="Best PWA App in the world" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="msapplication-config"
          content="/static/icons/browserconfig.xml"
        />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/icons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/static/manifest.json" />
        <link
          rel="mask-icon"
          href="/static/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/static/icons/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://yourdomain.com" />
        <meta name="twitter:title" content="PWA App" />
        <meta name="twitter:description" content="Best PWA App in the world" />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/static/icons/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@DavidWShadow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PWA App" />
        <meta property="og:description" content="Best PWA App in the world" />
        <meta property="og:site_name" content="PWA App" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta
          property="og:image"
          content="https://yourdomain.com/static/icons/apple-touch-icon.png"
        />
      </Head>
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
