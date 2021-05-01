module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				beautifulBlue: '#0070f3',
				bloodOrange: '#ff4500',
				goldenSun: '#ffd700',
				whiteSmokeLight: '#fafafa',
			},
			screens: {
				smd: { max: '800px' },
			},
		},
	},
	variants: {
		extend: {
			textColor: ['hover', 'focus', 'active'],
			boxShadow: ['hover', 'focus', 'active'],
			textDecoration: ['hover', 'focus', 'active'],
		},
	},
	plugins: [],
};
