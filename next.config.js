const withPlugins = require('next-compose-plugins')

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
})
const withAnalyzer = require('@next/bundle-analyzer')({
  enabled: false
})

module.exports = withPlugins([withMDX, withAnalyzer], {
  webpack: (config, {isServer}) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
        process: false
      }
    }

    return config
  },
  images: {
    loader: 'custom',
    domains: ['images.unsplash.com']
  },
  experimental: {
    urlImports: ['https://cdn.skypack.dev']
  }
})
