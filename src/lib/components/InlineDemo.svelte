<script lang="ts">
	export let description: string;
	export let title: string;
</script>

<section class="container offset">
	<header>
		<h3>{title}</h3>
		<p>{description}</p>
	</header>
	<slot />
</section>

<style>
	.container {
		border: 2px solid var(--theme-background-secondary);
		border-radius: var(--space-xs);
		display: grid;
		gap: var(--space-m);
		grid-template-columns: 1fr 1fr;
		padding: var(--space-m);
	}

	header {
		border-bottom: 2px solid var(--theme-background-secondary);
		grid-column: 1 / -1;
		padding-bottom: var(--space-m);
	}

	h3 {
		font-size: var(--text-m);
		margin-bottom: var(--space-xs);
	}

	p {
		font-size: var(--text-xs);
	}
</style>
