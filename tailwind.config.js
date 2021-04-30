module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				beautifulBlue: '#0070f3',
				bloodOrange: '#ff4500',
				goldenSun: '#ffd700',
			},
			boxShadow: {
				beautifulBlueShadow: 'rgba(6, 128, 220, 0.2) 0px 7px 29px 0px',
				bloodOrangeShadow: 'box-shadow: rgba(255, 69, 0, 0.2) 0px 7px 29px 0px',
				goldenSunShadow: 'box-shadow: rgba(255, 215, 0, 0.2) 0px 7px 29px 0px',
			},
		},
	},
	variants: {
		extend: {
			textColor: ['hover', 'focus', 'active'],
			boxShadow: ['hover', 'focus', 'active'],
		},
	},
	plugins: [],
};
