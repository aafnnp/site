// const withPlugins = require('next-compose-plugins')
//
// const withMDX = require('@next/mdx')({
//   extension: /\.mdx$/
// })
// const withAnalyzer = require('@next/bundle-analyzer')({
//   enabled: false
// })

module.exports = {
  reactStrictMode: true,
  // webpack: (config, {isServer}) => {
  //   if (!isServer) {
  //     // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
  //     config.resolve.fallback = {
  //       fs: false,
  //       // tls: false,
  //       // net: false,
  //       process: false
  //     }
  //   }
  //
  //   return config
  // },
  images: {
    loader: 'custom',
    domains: ['images.unsplash.com', 'pics-rust.vercel.app', 'cdn.jsdelivr.ne']
  },
  experimental: {
    fontLoaders: [{loader: '@next/font/google', options: {subsets: ['latin']}}]
  }
}
