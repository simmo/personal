<script lang="ts">
	export let description: string | undefined = undefined;
	export let title: string;
</script>

<section class="container offset">
	<header>
		<h3 class="title">{title}</h3>
		{#if description}
			<p class="description">{description}</p>
		{/if}
	</header>
	<slot />
</section>

<style>
	.container {
		border: 2px solid var(--theme-background-secondary);
		border-radius: var(--space-xs);
		display: grid;
		gap: var(--space-m);
		padding: var(--space-m);
	}

	header {
		border-bottom: 2px solid var(--theme-background-secondary);
		display: grid;
		gap: var(--space-xs);
		padding-bottom: var(--space-m);
	}

	.title {
		font-size: var(--text-m);
	}

	.description {
		font-size: var(--text-xs);
	}
</style>
