<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	const now = new Date();
</script>

<div class="grid layout">
	<Header />
	<main class="full grid">
		<slot />
	</main>
	<footer>&copy; {now.getFullYear()} Mike Simmonds</footer>
</div>

<style>
	.layout {
		align-items: start;
		row-gap: max(var(--space-xl), 5vh);
		grid-template-rows: auto 1fr auto;
		height: 100%;
	}
	main {
		row-gap: var(--space-xl);
	}

	footer {
		border-top: 1px solid var(--theme-background-secondary);
		color: var(--theme-text-secondary);
		font-size: var(--text-xs);
		padding-top: var(--space-m);
		padding-bottom: max(var(--space-m), env(safe-area-inset-bottom));
	}
</style>
