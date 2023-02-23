import SEO from 'components/SEO'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'
import {Analytics} from '@vercel/analytics/react'
import 'assets/styles/main.scss'
import localFont from '@next/font/local'


const LXGWFont = localFont({src:'./LXGWWenKaiScreen.ttf'})

const Menu = dynamic(() => import('components/Menu'), {ssr: false})

const App = ({Component, pageProps, router}) => {
  const {route} = router
  const url = `https://manon.icu${route}`

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Manon.icu,homepage" />
        <title>Manon.icu | Home</title>
      </Head>
      <SEO url={url} />
      <div className={`grid grid-cols-1 sm:grid-cols-[300px_1fr] ${LXGWFont.className}`}>
        {route !== '/' && (
            <Menu />
        )}
        <Component {...pageProps} canonical={url} key={url} />
      </div>
      <Analytics />
    </>
  )
}

export default App
