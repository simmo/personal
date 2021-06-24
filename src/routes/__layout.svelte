<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

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
