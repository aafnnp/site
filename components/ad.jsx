import React, { Fragment, useEffect } from 'react';

const Ad = ({ children }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default Ad;
