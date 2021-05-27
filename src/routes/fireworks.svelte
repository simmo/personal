<script lang="ts">
	import Copy from '$lib/components/Copy.svelte';
	import Link from '$lib/components/Link.svelte';
	import Page from '$lib/components/Page.svelte';
	import Fireworks from '$lib/projects/fireworks/Fireworks.svelte';
</script>

<svelte:head>
	<!-- <meta property="og:image" content="https://mike.id/preview/fireworks.jpg" /> -->
</svelte:head>

<Page pageTitle="Fireworks" heading="Fireworks" description="Rendering fireworks">
	<p slot="intro" />

	<Fireworks />
</Page>
