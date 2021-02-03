
import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
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
    </>
    )
}



export default MyApp
