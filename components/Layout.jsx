import React from 'react'
import Head from 'next/head'

export default function Layout ({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        <meta charSet="utf-8" />

        <meta content={description} name="Description" />

        <title>{pageTitle}</title>

        <link
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net"
          rel="preconnect"
        />
      </Head>

      <main className="p-3">
        <div className="content mx-auto">{children}</div>
      </main>
    </>
  )
}
