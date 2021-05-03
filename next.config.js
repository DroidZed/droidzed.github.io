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
		disable: process.env.NODE_ENV === 'development',
		register: true,
		scope: '/app',
		sw: 'service-worker.js',
		dest: "public",
		runtimeCaching,
		fallbacks: {
			document: '/offlinePage'
		}
	},
});
