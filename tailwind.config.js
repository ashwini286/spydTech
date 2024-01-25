// const withMT = require("@material-tailwind/react/utils/withMT"); 
// module.exports = withMT({
//   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });

/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports =withMT( {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		"path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
		"path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
		'node_modules/flowbite-react/lib/esm/**/*.js',
	],
	theme: {
		extend: {
			colors: {
				primary: '023047',
				secondary: '#FAAC06',
				tertiary: '#ffffff',
			},
			fontFamily: {
				'montserrat': ['Montserrat', 'sans-serif'],
			  },
		},
	},
	plugins: [
		require('flowbite/plugin'),
	],
});
