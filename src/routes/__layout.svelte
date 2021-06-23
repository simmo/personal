<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

<div class="grid layout">
	<Header />
	<main class="full grid">
		<slot />
	</main>
	<Footer />
</div>

<style>
	.layout {
		align-items: start;
		row-gap: max(var(--space-xl), 5vh);
		grid-template-rows: auto 1fr auto;
		height: 100%;
	}
	main {
		row-gap: var(--space-s);
	}
</style>
