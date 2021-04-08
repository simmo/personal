<script lang="ts">
	export let pageTitle: string[] = [];
	export let heading: string;
	export let description: string;

	const title = [...pageTitle, 'Mike Simmonds'].join(' - ');

	console.log(title);
</script>

<svelte:head>
	<title>{title}</title>

	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
</svelte:head>

<header class="content">
	<div>
		<h1>{heading}</h1>
		<p>{description}</p>
	</div>
	<slot name="intro" />
</header>

<div class="full grid body">
	<slot />
</div>

<style>
	header {
		display: grid;
		gap: var(--space-xs);
		padding-top: 5vmax;
	}

	h1 {
		font-size: var(--text-l);
	}

	p {
		font-size: var(--text-m);
	}

	.body {
		display: grid;
		row-gap: var(--space-l);
		padding-bottom: max(var(--space-l), env(safe-area-inset-bottom));
	}
</style>
