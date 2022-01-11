const dev = process.env.NODE_ENV !== 'production';
console.log(dev);
module.exports = {
	content: dev ? [] : ['./**/*.html'],
	theme: {
		extend: {
			fontFamily: {
				default: ['"Courier New"', 'Courier', 'monospace'],
			},
		},
	},
	plugins: [],
};
