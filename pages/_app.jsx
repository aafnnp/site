import dynamic from 'next/dynamic'
import Head from 'next/head'
import {useRouter} from 'next/router'
import React, {useState} from 'react'
import 'styles/main.scss'
import 'styles/markdown.scss'
import SEO from 'components/SEO'
const Header = dynamic(() => import('components/Header'))
const Comments = dynamic(() => import('components/Comments'))

const App = ({Component, pageProps}) => {
  const {route} = useRouter()
  const url = `https://manon.icu${route}`
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrapes = () => {
    setIsOpen(!isOpen)
  }

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
      <Header toggleDrapes={toggleDrapes} isOpen={isOpen} />

      <Component {...pageProps} canonical={url} key={url} isOpen={isOpen} />
      {route.startsWith('/blog') && <Comments />}
    </>
  )
}

export default App
