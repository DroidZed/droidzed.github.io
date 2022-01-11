const dotenv = require("dotenv")

dotenv.config()

const dev = process.env.NODE_ENV !== 'production';
console.log(process.env.NODE_ENV);
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
