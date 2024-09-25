import daisyui from "daisyui";
import tailwindTypography from "@tailwindcss/typography"

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [tailwindTypography, daisyui],
	daisyui: {
		themes:{
			myTheme: {
				"primary": "#01325a",
				"secondary": "#bdd3ce",
				"accent": "#f4a258",
				"neutral": "#708c69",
				"base-100": "#fcf3e3",
			},
		}
	}
}
 //TODO figure out how to use custom theme.