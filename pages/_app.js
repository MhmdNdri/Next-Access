import "../styles/globals.css";
import Head from "next/head";
import { AnimateSharedLayout } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Snackbar, Button } from "@material-ui/core";
import { Workbox } from "workbox-window";
import { Provider } from "next-auth/client";
import "aos/dist/aos.css";
import "swiper/swiper-bundle.css";
import "../styles/TodoContext.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Accessibilty</title>
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

      <motion.div
        exit="pageExit"
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        transition={{ duration: 0.7 }}
        variants={{
          pageInitial: {
            opacity: 0,
            backgroundColor: "red",
          },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            backgroundColor: "black",
            filter: `invert()`,
            opacity: 0,
          },
        }}
      >
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </motion.div>
    </>
  );
}

export default MyApp;
