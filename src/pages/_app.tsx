import Layout from '@/ components/Layout'
import Menu from '@/ components/Menu';
import '@/styles/globals.css'
import axios from 'axios';
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps, ) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader)
        loader.remove();
    }
  }, []);
  return (
    <Layout>

      <Script type="text/javascript" src="https://cdn.envybox.io/widget/cbk.js?wcb_code=3b415e19fc3bcc1594c542a0095698f0" async/>
      <Component {...pageProps} />
    </Layout>

  )

}

