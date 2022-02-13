import autoprefixer from 'autoprefixer';
import sveltePreprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';
import urls from 'rehype-urls';
import slug from 'rehype-slug';
import autoLinkHeadings from 'rehype-autolink-headings';

function processUrl(url, node) {
	if (node.tagName === 'a') {
		if (url.href.startsWith('http')) {
			// Open external links in new tab
			node.properties.target = '_blank';
			// Fix a security concern with offsite links
			// See: https://web.dev/external-anchors-use-rel-noopener/
			node.properties.rel = 'noopener';
		}
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: 'src/lib/components/Page.svelte',
			rehypePlugins: [
				[urls, processUrl], // adds rel and target to <a> elements
				slug, // adds slug to <h1>-<h6> elements
				[autoLinkHeadings, { behavior: 'wrap' }],
			],
		}),
	],
	kit: {
		adapter: vercel(),
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
