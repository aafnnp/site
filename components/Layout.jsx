import { NextSeo } from 'next-seo'
import React from 'react'

export const Layout = ({
  children,
  title,
  description
}) => {
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
