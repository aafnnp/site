import React, { useEffect } from 'react';

const Ad = ({ children }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <div className="my-8">{children}</div>;
};

export default Ad;
