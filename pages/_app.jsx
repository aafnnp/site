import {NextSeo} from 'next-seo'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import {useRouter} from 'next/router'
import React, {useState} from 'react'
import 'styles/main.scss'
import 'styles/markdown.scss'
import {Transition, animated} from 'react-spring'

const Header = dynamic(() => import('components/Header'))
const Comments = dynamic(() => import('components/Comments'))

const App = ({Component, pageProps}) => {
  const {route} = useRouter()
  const url = `https://manon.icu${route}`
  const items = [
    {
      id: route,
      Component,
      pageProps
    }
  ]
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
      <NextSeo
        titleTemplate="%s - Manon.icu"
        openGraph={{
          type: 'website',
          url,
          description:
            'The personal website for Manon, Frontend Web Developer.',
          site_name: 'Manon | manon.icu',
          images: [
            {
              url: 'https://pics-rust.vercel.app/uPic/9oh25b.jpg',
              width: 900,
              height: 900
            }
          ]
        }}
        canonical={url}
        twitter={{
          handle: '@Manonicu',
          cardType: 'summary_large_image'
        }}
      />
      <Header toggleDrapes={toggleDrapes} isOpen={isOpen} />
      <Transition
        items={items}
        keys={(item) => item.id}
        from={{translateX: '-100%'}}
        initial={{translateX: '0%'}}
        enter={{translateX: '0%'}}
        leave={{translateX: '-100%', position: 'absolute'}}
      >
        {(styles, {pageProps, Component}) => (
          <animated.div style={{...styles, width: '100%'}}>
            <Component
              {...pageProps}
              canonical={url}
              key={url}
              isOpen={isOpen}
            />
            {route.startsWith('/blog') && <Comments />}
          </animated.div>
        )}
      </Transition>
    </>
  )
}

export default App
