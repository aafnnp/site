import React from 'react'
import {ColorModeScript} from '@chakra-ui/react'
import NextDocument, {Html, Head, Main, NextScript} from 'next/document'
import theme from 'utils/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>"
          />
          <script
            key="adsense"
            data-ad-client="ca-pub-3854566314387093"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
        </Head>

        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
