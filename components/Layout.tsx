import { NextSeo } from 'next-seo'
import React from 'react'

interface PageProps {
  title?: string;
  description?: string;
}

export const Layout: React.FC<PageProps> = ({
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
