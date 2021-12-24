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
      {location.host.includes('tcloudbase.com') ? (
        <>
          「<a href="https://webify.cloudbase.net/">CloudBase Webify </a>
          提供网站托管服务」
        </>
      ) : null}
    </>
  );
};

export default Layout;
