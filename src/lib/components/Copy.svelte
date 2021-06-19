<div>
	<slot />
</div>

<style>
	div {
		display: grid;
		row-gap: var(--space-s);
	}

	div :global(h2) {
		color: var(--color-blue);
		font-size: var(--text-l);
		margin-top: var(--space-s);
		margin-bottom: calc(var(--space-xs) * -1);
	}

	div :global(h3) {
		font-size: var(--text-m);
		margin-bottom: calc(var(--space-s) * -1);
	}

	div :global(blockquote) {
		border-left: var(--space-xxs) solid var(--theme-highlight);
		margin: 0;
		padding-left: var(--space-s);
	}

	div :global(ol) {
		display: grid;
		row-gap: var(--space-xxs);
		margin: 0;
		padding: 0 0 0 var(--space-m);
	}

	div :global(:first-child) {
		margin-top: 0;
	}
</style>
