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

		if (res.ok && posts.length) {
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
	import PostLink from '$lib/components/PostLink.svelte';
	import { toSentenceCase } from '$lib/utils/toSentenceCase';
	import { formatTitle } from '$lib/utils/formatTitle';

	export let title: string;
	export let posts: Post[];

	title = toSentenceCase(title);
</script>

<svelte:head>
	<title>{formatTitle(title)}</title>
</svelte:head>

<section class="full grid">
	<h2>{title}</h2>
	<div class="offset list">
		{#each posts as { slug: href, heading, description, published }}
			<PostLink {href} {heading} {description} {published} />
		{/each}
	</div>
</section>

<style>
	section {
		display: grid;
		row-gap: var(--space-l);
	}

	h2 {
		font-size: var(--text-xl);
		font-weight: 700;
	}

	.list {
		display: grid;
		row-gap: var(--space-s);
	}
</style>
