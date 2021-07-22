<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	import { dev } from '$app/env';
</script>

<svelte:head>
	{#if !dev}
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-N9SY99BB39"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', 'G-N9SY99BB39');
		</script>
	{/if}
</svelte:head>

<div class="layout">
	<Header />
	<main class="grid">
		<slot />
	</main>
	<Footer />
</div>

<style>
	.layout {
		align-items: start;
		display: grid;
		grid-template-rows: auto 1fr auto;
		height: 100%;
		row-gap: max(var(--space-xl), 5vh);
	}

	main {
		row-gap: var(--space-xl);
	}
</style>
