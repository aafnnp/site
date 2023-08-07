// module.exports = require('@next/bundle-analyzer')({
//   enabled: true,
//   reactStrictMode: true,
//   images: {
//     unoptimized: true,
//     domains: [
//       'images.unsplash.com',
//       'pics-rust.vercel.app',
//       'cdn.jsdelivr.net'
//     ],
//     removePatterns: [
//       {
//         protocol: 'https:',
//         hostname: 'cdn.jsdelivr.net',
//         port: '',
//         pathname: '/gh/manonicu/pics@master/**'
//       }
//     ]
//   }
// })
module.exports = {
  enabled: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
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
  }
}
