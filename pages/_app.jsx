import { AnimatePresence } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import '../styles/main.scss';
import '../styles/markdown.css';
const Header = dynamic(() => import('components/Header'));

NProgress.configure({ showSpinner: false });

export function reportWebVitals(metric) {
  console.log(metric);
}

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const url = `https://manon.icu${router.route}`;
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    router.events.on('routeChangeStart', () => NProgress.start());
    router.events.on('routeChangeComplete', () => NProgress.done());
    router.events.on('routeChangeError', () => NProgress.done());

    return () => {
      router.events.off('routeChangeStart', () => NProgress.start());
      router.events.off('routeChangeComplete', () => NProgress.done());
      router.events.off('routeChangeError', () => NProgress.done());
    };
  }, [router]);
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
      <DefaultSeo
        titleTemplate="%s - Manon"
        openGraph={{
          type: 'website',
          url,
          description: 'The personal website for Manon, Web Developer.',
          site_name: 'Manon | manon.icu',
          images: [],
        }}
        canonical={url}
      />
      <Header />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
    </>
  );
};

export default App;
