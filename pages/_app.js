import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import AOS from "aos";
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log('hi')
    AOS.init({
      duration: 1000,
      delay: 100,
      once: true,
    })
    window.addEventListener('touchmove', () => {
      AOS.refresh()
    }, false)
  }, []);

  return <>
    <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
    </Head>
    <Script src="https://code.jquery.com/jquery-3.6.0.js" />
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />

    <Script src="main.js" />
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
    <Component {...pageProps} />
  </>
}

export default MyApp
