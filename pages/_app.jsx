import {
  ChakraProvider,
  ColorModeProvider,
  Container,
  extendTheme,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import '../styles/main.scss';

const Header = dynamic(() => import('components/Header'));
const Comments = dynamic(() => import('components/Comments'));
const theme = extendTheme({
  fonts: {
    body: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },
});

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
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Container maxW="container.md">
            <Header style={{ color: '#fff' }} />
          </Container>
          <Container
            maxW={
              /^\/(challenges|about)/.test(router.route)
                ? 'container.full'
                : 'container.md'
            }
          >
            <Component {...pageProps} canonical={url} key={url} />
            {router.route.startsWith('/blog') && <Comments />}
          </Container>
        </ColorModeProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
