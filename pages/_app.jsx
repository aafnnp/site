import {NextSeo} from 'next-seo'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import {useRouter} from 'next/router'
import React from 'react'
import 'styles/main.scss'
import 'styles/markdown.scss'

const Sidebar = dynamic(() => import('components/Sidebar'))
const Comments = dynamic(() => import('components/Comments'))


const App = ({Component, pageProps}) => {
  const router = useRouter()
  const url = `https://manon.icu${router.route}`
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
      <div className={'relative flex w-screen h-screen overflow-hidden'}>
        <Sidebar />
        <div className="flex-auto h-full overflow-y-scroll scroll-smooth bg-gray-100 p-8">
          <Component {...pageProps} canonical={url} key={url} />
          {router.route.startsWith('/blog') && <Comments />}
        </div>
      </div>
    </>
  )
}

export default App
