/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ["./src/**/*.{html,js,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#F2003C",
			},
            fontFamily: {
				sans: ["Satoshi", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
        require('@tailwindcss/typography'),
      ],
};
