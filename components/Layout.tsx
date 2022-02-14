import { NextSeo } from 'next-seo'
import React from 'react'
import { LayoutProps } from 'types'

export const Layout: React.FC<LayoutProps> = ({
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
