import React, { ReactNode } from 'react'
import { NextSeo } from 'next-seo'

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ children, title, description }:Props) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />
      {children}
    </>
  )
}

export default Layout
