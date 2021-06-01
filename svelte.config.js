import autoprefixer from 'autoprefixer';
import sveltePreprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: vercel(),
		target: '#svelte',
		vite: {
			css: {
				postcss: {
					plugins: [autoprefixer],
				},
			},
		},
	},
};

export default config;
