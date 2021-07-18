const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
})

module.exports = withPlugins([withMDX], {
  images: {
    domains: ['cdn.jsdelivr.net']
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        child_process: false,
        crypto: false,
        os: false,
        tty: false,
        worker_threads: false
      }
    }
    return config
  }
})
