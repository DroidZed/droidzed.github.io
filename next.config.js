module.exports = {
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
	},
};
