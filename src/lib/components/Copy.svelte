<div>
	<slot />
</div>

<style>
	div {
		display: grid;
		row-gap: var(--space-s);
	}

	div :global(code) {
		background-color: var(--theme-background-secondary);
		border-radius: var(--space-xxs);
		display: inline-block;
		font-weight: 500;
		padding: 0 var(--space-xs);
	}

	div :global(pre) {
		background-color: var(--theme-background-secondary);
		border-radius: var(--space-xxs);
		font-weight: 500;
		margin: 0;
		overflow-x: auto;
		padding: var(--space-s);
		width: 100%;
	}

	div :global(pre code) {
		all: unset;
		display: block;
		width: 100%;
	}

	div :global(h2) {
		font-size: var(--text-m);
		margin-top: var(--space-s);
		margin-bottom: calc(var(--space-xs) * -1);
	}

	div :global(h3) {
		font-size: var(--text-s);
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
	}

	div :global(:first-child) {
		margin-top: 0;
	}
</style>
