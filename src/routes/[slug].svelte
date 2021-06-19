<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import type { Post } from '$lib/types';

	const oldUrls: string[] = ['gulp-stats', 'matrix', 'maze', 'sort', 'starfield'];

	export const load: Load = async ({ page, fetch }) => {
		if (oldUrls.includes(page.params.slug)) {
			return {
				status: 301,
				redirect: `/blog/${page.params.slug}`,
			};
		}

		const url = `/${page.params.slug}.json`;
		const res = await fetch(url);
		const posts: Post[] = await res.json();

		if (res.ok) {
			return {
				props: {
					title: page.params.slug,
					posts: posts.map((project) => ({
						...project,
						published: new Date(project.published),
					})),
				},
			};
		}

		return {
			status: 404,
			error: new Error(`Not found: ${page.path}`),
		};
	};
</script>

<script lang="ts">
	import TwoColumnGrid from '$lib/components/TwoColumnGrid.svelte';
	import PostLink from '$lib/components/PostLink.svelte';
	import { toSentenceCase } from '$lib/utils/toSentenceCase';

	export let title: string;
	export let posts: Post[];
</script>

<section class="main">
	<h2>{toSentenceCase(title)}</h2>
	<TwoColumnGrid>
		{#each posts as { slug: href, heading, description }}
			<PostLink {href} {heading} {description} />
		{/each}
	</TwoColumnGrid>
</section>

<style>
	section {
		display: grid;
		row-gap: var(--space-s);
	}

	h2 {
		font-size: var(--text-xl);
		font-weight: 700;
	}
</style>
