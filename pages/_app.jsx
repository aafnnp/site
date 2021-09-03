import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../styles/main.scss';
import '../styles/markdown.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="description" content="Manon.icu,homepage" />
          <title>Manon.icu | Home</title>
        </Head>
        <App {...this.props} Component={Component} pageProps={pageProps} />
      </>
    );
  }
}
