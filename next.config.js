const withPlugins = require("next-compose-plugins");
const withMDX = require("@next/mdx")({
	extension: /\.mdx$/
});

module.exports = withPlugins([withMDX], {
	pageExtensions: ["js", "jsx", "md", "mdx"],
	target: "serverless",
	future: {
		webpack5: true
	},
	webpack: (config, {isServer}) => {
		resolve: {
			fallback: {
				fs: false;
			}
		}
		if (!isServer) {
			config.resolve = {
				...config.resolve,
				...{
					fallback: {
						fs: false,
						path: false
					}
				}
			};
		}
		config.module.rules.push({
			test: /\.md$/,
			use: "raw-loader"
		});
		return config;
	}
});
