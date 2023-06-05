import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>MyTop - Наш лучший топ</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
