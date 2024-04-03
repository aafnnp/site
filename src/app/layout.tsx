import React from 'react'
import '@/assets/styles/main.scss'
import dynamic from 'next/dynamic'

const Menu = dynamic(() => import('@/components/Menu'), { ssr: false })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>"
        />
      </head>
      <body>
        <Menu />
        {children}
        <script
          key="adsense"
          data-ad-client="ca-pub-3854566314387093"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
      </body>
    </html>
  )
}
