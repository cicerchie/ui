import type { Config } from 'tailwindcss';

export default {
	content: ['../src/**/*.{svelte,ts}', './src/**/*.{svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: []
} satisfies Config;
