const withPlugins = require("next-compose-plugins");
// const mdxEnhanced = require('next-mdx-enhanced')

// /*
//  * Const withBundleAnalyzer = require('@next/bundle-analyzer')({
//  *   enabled: process.env.ANALYZE === 'true',
//  * })
//  */
const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

// module.exports = withPlugins(
// 	[
// 		withMDX,
// 		mdxEnhanced({
// 			layoutPath:'./src/templates'
// 		})
// 	], {
// 		pageExtensions: ["js", "jsx", "md", "mdx"],
// 		target: "serverless",
// 		webpack: (config, { isServer }) => {
// 			if (!isServer) {
// 				config.resolve.fallback = {
// 					fs: false,
// 					path: false
// 				}
// 			}
// 			config.module.rules.push({
// 				test: /\.mdx$/,
// 				use: "raw-loader",
// 			});

// 			return config;
// 		},
// 	}
// );
module.exports = withPlugins([withMDX], {
  images: {
    domains: ["cdn.jsdelivr.net"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        child_process: false,
        crypto: false,
        os: false,
        tty: false,
        worker_threads: false,
      };
    }
    return config;
  },
});
