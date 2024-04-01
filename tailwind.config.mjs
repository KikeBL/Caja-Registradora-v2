/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'main-pink': '#fef9fa',
				'dark-pink': '#7b3f59',
				'dark-green': '#3E7A41',
				'darker-pink': '#562037',
			},
		},
	},
	plugins: [],
}
