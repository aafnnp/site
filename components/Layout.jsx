import { NextSeo } from 'next-seo';
import React from 'react';

const Layout = ({ children, title, description }) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />
      {children}
    </>
  );
};

export default Layout;
