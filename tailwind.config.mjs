/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', 
		'./node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			fontSize: {
				h1: ['3.618rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }], // ~58px
				h2: ['2.618rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }], // ~42px
				h3: ['1.618rem', { lineHeight: '1.4', letterSpacing: '0em' }],    // ~26px
				h4: ['1rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],    // ~16px
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
