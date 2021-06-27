<script>
	import { format } from 'date-fns';
	import { formatTitle } from '$lib/utils/formatTitle';

	export let title = undefined;
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

<div class="full grid body">
	<slot />
</div>

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
	}

	.description {
		font-size: var(--text-m);
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
</style>
