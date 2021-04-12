<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div class="grid">
	<Header />
	<main class="full grid">
		<slot />
	</main>
</div>

<style>
	main {
		row-gap: var(--space-xxl);
	}
</style>
