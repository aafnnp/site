import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const GA_MEASUREMENT_ID = 'GTM-MFN3B2T';

    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>"
          />
          <script
            async
            defer
            data-website-id="4c7e9697-dfc2-437a-a412-2f16f2b1b8f7"
            src="https://umami-gules.vercel.app/umami.js"
          ></script>
          <script
            async
            defer
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3854566314387093"
            crossOrigin="anonymous"
          ></script>
        </Head>

        <body className="flex justify-center bg-white dark:bg-gray-800 font-sans leading-normal text-base transition-colors duration-100 ease-linear">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
