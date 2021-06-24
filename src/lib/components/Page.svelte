<script>
	import format from 'date-fns/format';
	import { formatTitle } from '$lib/utils/formatTitle';

	export let title;
	export let description;
	export let heading;
	export let published;
	export let og = {};

	if (published) {
		published = new Date(published);
	}

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
	<h1>{heading}</h1>
	<p class="description">{description}</p>
	{#if published}
		<time datetime={format(published, 'yyyy-MM-dd')}
			>Published: {format(published, 'd MMMM yyyy')}</time
		>
	{/if}
	<slot name="intro" />
</header>

<slot />

<style>
	header {
		border-bottom: 1px solid var(--theme-background-secondary);
		display: grid;
		padding-bottom: var(--space-l);
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
