<script lang="ts">
	export let inverted: boolean = false;
	export let square: boolean = false;
</script>

<button {...$$props} class:inverted class:square on:click>
	<slot />
</button>

<style>
	button {
		appearance: none;
		background-color: var(--theme-accent);
		border-radius: var(--space-xxs);
		border: 0;
		box-shadow: 0 0 0 0 transparent;
		color: var(--color-grey-100);
		display: inline-grid;
		line-height: 1;
		font: inherit;
		font-weight: bold;
		margin: 0;
		padding: var(--space-xxs) var(--space-s);
		outline: none;
		text-transform: uppercase;
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
		background-color: hsl(145, 63%, 49%);
	}

	button.inverted:not(:disabled):hover,
	button.inverted:not(:disabled):focus {
		box-shadow: 0 0 0 2px var(--theme-accent);
	}

	button:disabled {
		filter: grayscale(1);
		opacity: 0.4;
	}
</style>
