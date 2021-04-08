<script>
	import Logo from './Logo.svelte';
</script>

<header class="grid full">
	<div>
		<Logo size={25} />
		<a href="/"><strong>mike.id</strong></a>
	</div>
</header>

<style>
	header {
		background-color: var(--theme-background-primary);
		border-bottom: 1px solid var(--theme-background-secondary);
		box-shadow: 0 1px 0 var(--space-xxs) var(--theme-shadow);
		padding: var(--space-s) 0;
		position: sticky;
		top: 0;
	}

	div {
		align-content: center;
		align-items: center;
		display: grid;
		gap: var(--space-xs);
		grid-template-columns: auto auto 1fr;
	}

	a {
		color: inherit;
		line-height: 1;
	}

	strong {
		font-size: var(--text-xs);
		text-transform: uppercase;
	}
</style>
