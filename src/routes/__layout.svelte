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

	main :global(a) {
		background: linear-gradient(to right, var(--theme-accent), var(--theme-accent)),
			linear-gradient(to right, var(--color-pink), var(--color-pink));
		background-size: 100% 2px, 0 2px;
		background-position: 100% 100%, 0 100%;
		background-repeat: no-repeat;
		transition: background-size 400ms;
	}

	main :global(a):hover,
	main :global(a):focus {
		background-size: 0 2px, 100% 2px;
		color: inherit;
	}
</style>
