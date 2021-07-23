<script context="module">
	// import type { Load } from '@sveltejs/kit';

	export const load = async ({ page, fetch }) => {
		const url = `./${page.params.slug}.json`;
		const res = await fetch(url);
		const stats = await res.json();

		if (res.ok) {
			return { props: { stats } };
		}

		return {
			status: 404,
			error: new Error(`Not found: ${page.path}`),
		};
	};
</script>

<script>
	import { format, formatISO } from 'date-fns';
	import { formatTitle } from '$lib/utils/formatTitle';
	import { onMount } from 'svelte';
	import calcReadingTime from '$lib/utils/calcReadingTime';

	export let title = undefined;
	export let description;
	export let heading;
	export let published = undefined;
	export const isPublished = true;
	export let og = {};
	export let stats = {};

	let body;
	let meta = [];

	title = formatTitle(title);
	// @ts-ignore
	og = { description, title, type: 'website', ...og };

	if (published) {
		published = new Date(published);

		meta = [...meta, ['Published', published]];

		og.type = 'article';
		og['article:published_time'] = formatISO(published);
		og['article:author'] = 'Mike Simmonds';
	}

	if (stats.views) {
		meta = [...meta, ['Views', stats.views]];
	}

	onMount(() => {
		if (!body) return;

		if (published) {
			meta = [...meta, ['Reading time', calcReadingTime(body.innerText)]];
		}
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	{#each Object.entries(og) as [property, content]}
		<meta property={`og:${property}`} {content} />
	{/each}
</svelte:head>

<header class="head">
	<h1 class="title">{heading}</h1>
	<p class="description">{description}</p>
	{#if meta.length}
		<ul class="meta">
			{#each meta as [key, value]}
				<li>
					<strong>{key}:</strong>
					{#if value instanceof Date}
						<time datetime={formatISO(value)}>{format(value, 'd MMMM yyyy')}</time>
					{:else}
						{value}
					{/if}
				</li>
			{/each}
		</ul>
	{/if}
	<slot name="intro" />
</header>

<div class="full grid body" bind:this={body}>
	<slot />
</div>

<style>
	.head {
		border-bottom: 1px solid var(--theme-background-secondary);
		display: grid;
		padding-bottom: var(--space-l);
		row-gap: var(--space-s);
	}

	.title {
		font-size: var(--text-xl);
		font-weight: 700;
	}

	.description {
		font-size: var(--text-m);
	}

	.meta {
		align-content: start;
		justify-content: start;
		display: grid;
		gap: var(--space-xxs);
		grid-template-columns: repeat(auto-fit, 15rem);
		font-size: var(--text-xs);
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.body {
		row-gap: var(--space-s);
	}

	.body > :global(h2) {
		color: var(--color-blue);
		font-size: var(--text-l);
		margin-bottom: calc(var(--space-xs) * -1);
		margin-top: var(--space-m);
	}

	.body > :global(h2 a),
	.body > :global(h3 a),
	.body > :global(h4 a),
	.body > :global(h5 a),
	.body > :global(h6 a) {
		color: inherit;
	}

	.body > :global(h3) {
		font-size: var(--text-m);
		margin-top: var(--space-s);
	}

	.body > :global(h4) {
		font-size: var(--text-s);
		margin-bottom: calc(var(--space-xs) * -1);
		margin-top: var(--space-xs);
	}

	.body > :global(blockquote) {
		border-left: var(--space-xxs) solid var(--theme-highlight);
		margin: 0;
		padding-left: var(--space-s);
	}

	.body > :global(ol) {
		display: grid;
		row-gap: var(--space-xxs);
		margin: 0;
		padding: 0 0 0 var(--space-m);
	}

	.body > :global(:first-child) {
		margin-top: 0;
	}

	.body > :global(pre) {
		grid-column: offset;
	}

	.body > :global(hr) {
		border: 0;
		border-top: 1px solid var(--theme-highlight);
		height: 1px;
		margin: var(--space-l) auto;
		position: relative;
		width: 20vw;
	}
</style>
