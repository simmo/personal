<script lang="ts">
	export let inverted: boolean = false;
	export let square: boolean = false;
</script>

<button {...$$props} class:inverted class:square on:click>
	<div class="inner"><slot /></div>
</button>

<style>
	button {
		appearance: none;
		background-color: var(--color-pink);
		border-radius: var(--space-xxs);
		border: 0;
		box-shadow: 0 0 0 0 transparent;
		color: var(--color-white);
		display: inline-grid;
		line-height: 1;
		font: inherit;
		font-weight: 600;
		margin: 0;
		padding: var(--space-xxs) var(--space-s);
		outline: none;
	}

	.inner {
		align-items: center;
		display: grid;
		gap: var(--space-xs);
		grid-auto-flow: column;
		grid-auto-columns: auto;
		justify-content: start;
	}

	.inverted {
		background-color: var(--theme-background-primary);
		color: var(--theme-text-primary);
	}

	.square {
		padding: var(--space-xs);
	}

	button:not(:disabled) {
		cursor: pointer;
		transition-duration: 0.3s;
		transition-property: color, background-color, border, box-shadow;
	}

	button:not(:disabled):hover,
	button:not(:disabled):focus {
		box-shadow: 0 0 0 var(--space-xxs) hsla(0, 100%, 100%, 15%);
	}

	button:not(:disabled):active {
		background-color: var(--color-pink);
	}

	button.inverted:not(:disabled):hover,
	button.inverted:not(:disabled):focus {
		box-shadow: 0 0 0 2px var(--color-pink);
	}

	button:disabled {
		filter: grayscale(1);
		opacity: 0.4;
	}
</style>
