<script lang="ts">
	export let pageTitle: string | string[] = [];
	export let heading: string;
	export let description: string;

	const title = [
		...(typeof pageTitle === 'string' ? [pageTitle] : pageTitle),
		'Mike Simmonds',
	].join(' - ');
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
</svelte:head>

<header>
	<div class="inner">
		<h1>{heading}</h1>
		<p>{description}</p>
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
		row-gap: var(--space-xs);
	}

	h1 {
		font-size: var(--text-l);
		line-height: 1.2;
	}

	p {
		font-size: var(--text-m);
		line-height: 1.4;
	}
</style>
