/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"white-pl": "#fdfaf9",
				"orange-pl": "#f79c6a",
				"black-pl": "#131a21",
				"pink-pl": "#db46d9",
				"skyblue-pl": "#2e69f2",
			},
		},
	},
	plugins: [],
};
