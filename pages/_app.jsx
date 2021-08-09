import Head from 'next/head';
import React from 'react';
import '../styles/main.scss';
import '../styles/markdown.css';

export default function App({ Component, pageProps }) {
  console.log(
    '🚀 ~ file: _app.jsx ~ line 7 ~ App ~ pageProps',
    pageProps,
    Component
  );
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
