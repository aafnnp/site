// const withMDX = require("@next/mdx")({
// 	extension: /\.mdx?$/
// });
// module.exports = withMDX({
// 	
// });
const withCss = require("@zeit/next-css");

module.exports = withCss({
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.node = {
				fs: 'empty'
			}
		}
		config.module.rules.push({
			test: /\.md$/,
			use: "raw-loader"
		})
		return config;
	}
})