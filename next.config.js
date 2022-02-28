const withPlugins = require('next-compose-plugins')

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
})
const withAnalyzer = require('@next/bundle-analyzer')({
  enabled: false
})

module.exports = withPlugins([withMDX, withAnalyzer], {
  images: {
    loader:"custom",
    domains: ['images.unsplash.com']
  }
})
