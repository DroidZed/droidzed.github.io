module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				beautifulBlue: "#0070f3",
				bloodOrange: "#ff4500",
				goldenSun: "#ffd700",
				whiteSmokeLight: "#fafafa",
				magesticMagenta: "#ffd700",
			},
			screens: {
				smd: { max: "800px" },
			},
			boxShadow: {
				cardShadow: "0px 7px 29px 0px rgba(100, 100, 111, 0.2)",
			},
		},
	},
	variants: {
		extend: {
			textColor: ["hover", "focus", "active"],
			boxShadow: ["hover", "focus", "active"],
			textDecoration: ["hover", "focus", "active"],
			transitionProperty: ["hover", "focus"],
			animation: ["hover", "focus"],
			transform: ["hover", "focus"],
		},
	},
	plugins: [],
};
