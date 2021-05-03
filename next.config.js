const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
	images: {
		domains: ["avatars.githubusercontent.com"],
	},
	webpack: (config, { isServer }) => {
		if (isServer) {
			require("./scripts/generate-sitemap");
		}

		return config;
	},
	pwa: {
		dest: "public",
		runtimeCaching,
	},
});
