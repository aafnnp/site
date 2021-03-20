module.exports = {
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.node = {
				fs: 'empty'
			}
		}
		config.module.rules.push({
			test: /\.md$/,
			use: "raw-loader"
		});
		return config;
	}
}
