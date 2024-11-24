/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#FEF4F1",
					200: "#FDE8E2",
					300: "#FBD1C5",
					400: "#F8B1A0",
					500: "#F15927",
					600: "#D94516",
					700: "#B53712",
					800: "#912C0E",
					900: "#77240B",
				},
			},
		}
	},
};
