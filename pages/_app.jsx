import SEO from 'components/SEO'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'
import 'styles/main.scss'
import 'styles/markdown.scss'
const Menu = dynamic(() => import('components/Menu'))

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
      {route !== '/' && <Menu />}
      <Component {...pageProps} canonical={url} key={url} />
    </>
  )
}

export default App
