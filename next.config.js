/** @type {import('next').NextConfig} */
const {withContentlayer} = require('next-contentlayer')
module.exports = withContentlayer({
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
})
