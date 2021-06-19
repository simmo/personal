<script lang="ts">
	import type { Meta, PostMeta, OpenGraph } from '$lib/types';

	export let meta: Meta | PostMeta;

	$: title = [
		...(typeof meta.title === 'string' ? [meta.title] : meta.title ?? []),
		'Mike Simmonds',
	].join(' - ');

	const defaultOg: OpenGraph = { description: meta.description, title, type: 'website' };
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={meta.description} />
	{#each Object.entries({ ...defaultOg, ...meta.og }) as [property, content]}
		<meta property={`og:${property}`} {content} />
	{/each}
</svelte:head>

<header>
	<div class="inner">
		<h1>{meta.heading}</h1>
		<p class="description">{meta.description}</p>
	</div>
	<slot name="intro" />
</header>

<slot />

<style>
	header {
		display: grid;
		row-gap: var(--space-s);
	}

	.inner {
		display: grid;
		row-gap: var(--space-s);
	}

	h1 {
		font-size: var(--text-xl);
		font-weight: 700;
		line-height: 1.2;
	}

	.description {
		font-size: var(--text-m);
	}
</style>
