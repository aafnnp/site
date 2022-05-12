import SEO from 'components/SEO'
import {AnimatePresence, domAnimation, LazyMotion, m} from 'framer-motion'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React, {useState} from 'react'
import 'styles/main.scss'
import 'styles/markdown.scss'
const Header = dynamic(() => import('components/Header'))
const Comments = dynamic(() => import('components/Comments'))

const App = ({Component, pageProps, router}) => {
  const url = `https://manon.icu${router.route}`
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrapes = () => {
    setIsOpen(!isOpen)
  }
  const variants = {
    initial: {
      opacity: 0,
      scale: 0.75
    },
    animate: {
      opacity: 1,
      scale: 1
    },
    exit: {
      opacity: 0,
      scale: 0.75
    }
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

      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter={false}>
          <m.div
            key={router.route}
            className="absolute w-screen h-screen"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{duration: 0.7}}
          >
            <Component
              {...pageProps}
              canonical={url}
              key={url}
              isOpen={isOpen}
            />
            {router.route.startsWith('/blog') && <Comments />}
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </>
  )
}

export default App
