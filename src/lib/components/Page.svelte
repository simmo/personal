<script>
	import { formatTitle } from '$lib/utils/formatTitle';

	export let title;
	export let description;
	export let heading;
	export let og = {};

	$: formattedTitle = formatTitle(title);

	const defaultOg = { description: description, title: formattedTitle, type: 'website' };
</script>

<svelte:head>
	<title>{formattedTitle}</title>
	<meta name="description" content={description} />
	{#each Object.entries({ ...defaultOg, ...og }) as [property, content]}
		<meta property={`og:${property}`} {content} />
	{/each}
</svelte:head>

<header>
	<div class="inner">
		<h1>{heading}</h1>
		<p class="description">{description}</p>
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
