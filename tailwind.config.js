/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const COLORS = {
	primary: "#F2003C",
	secondary: "#001529",
	pending: "#FFD700",
	success: "#008000",
	danger: "#FF0000",
	lightGray: "#AAAAAA",
	gray: "#000000E0",
};

export default {
	content: ["./src/**/*.{html,js,ts,tsx}"],
	theme: {
		extend: {
			colors: COLORS,
			fontFamily: {
				sans: ["Satoshi", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};