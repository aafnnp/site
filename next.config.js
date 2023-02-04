module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    domains: ['images.unsplash.com', 'pics-rust.vercel.app', 'cdn.jsdelivr.net']
  },
  experimental: {
    fontLoaders: [{loader: '@next/font/google', options: {subsets: ['latin']}}]
  }
}
