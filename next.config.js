const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: false });

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});

module.exports = withPlugins([withBundleAnalyzer, withMDX], {
  images: {
    domains: ['cdn.jsdelivr.net'],
  },
});
