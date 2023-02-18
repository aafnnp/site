module.exports = {
  reactStrictMode: true,
  images: {
    // loader: 'custom',
    domains: [
      'images.unsplash.com',
      'pics-rust.vercel.app',
      'cdn.jsdelivr.net'
    ],
    removePatterns: [
      {
        protocol: 'https:',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/gh/manonicu/pics@master/**'
      }
    ]
  },
  experimental: {
    fontLoaders: [{loader: '@next/font/google', options: {subsets: ['latin']}}]
  }
}
