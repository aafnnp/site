import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import '../styles/main.scss';
import '../styles/markdown.css';
const Header = dynamic(() => import('components/Header'));

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const url = `https://manon.icu${router.route}`;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,user-scalable=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Manon.icu,homepage" />
        <title>Manon.icu | Home</title>
      </Head>
      <NextSeo
        titleTemplate="%s - Manon.icu"
        openGraph={{
          type: 'website',
          url,
          description:
            'The personal website for Manon, Frontend Web Developer.',
          site_name: 'Manon | manon.icu',
          image:
            'https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/9oh25b.jpg',
          imageWidth: 900,
          imageHeight: 900,
        }}
        canonical={url}
        twitter={{
          handle: '@Manonicu',
          cardType: 'summary_large_image',
        }}
      />
      <Header />
      <Component {...pageProps} canonical={url} key={url} />
    </>
  );
};

export default App;
