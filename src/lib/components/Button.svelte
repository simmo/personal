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
		color: var(--color-white);
		display: inline-grid;
		line-height: 1;
		font: inherit;
		font-weight: bold;
		margin: 0;
		padding: var(--space-xs) var(--space-s);
		outline: none;
	}

	button.inverted {
		background-color: var(--theme-background-primary);
		color: var(--theme-text-primary);
	}

	button.square {
		padding: var(--space-xs);
	}

	button:not(:disabled) {
		cursor: pointer;
		transition-duration: 0.3s;
		transition-property: color, border, box-shadow;
	}

	button:not(:disabled):hover,
	button:not(:disabled):focus {
		/* box-shadow: 0 0 0 2px var(--theme-accent) inset, 0 0 0 3px currentColor inset; */
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
