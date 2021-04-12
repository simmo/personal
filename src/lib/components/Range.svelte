<script lang="ts">
	export let max: number;
	export let min: number;
	export let id: string;
	export let step: number;
	export let value: number;
</script>

<input {max} {min} {id} {step} type="range" bind:value on:input />

<style>
	input[type='range'] {
		appearance: none;
		background-color: var(--theme-background-secondary);
		border-radius: 500px;
	}

	input[type='range']:focus {
		outline: none;
	}

	input[type='range']::-webkit-slider-runnable-track {
		background-color: inherit;
		border-radius: 500px;
		height: var(--space-xs);
	}

	input[type='range']::-moz-range-track {
		background-color: inherit;
		border-radius: 500px;
		height: var(--space-xs);
	}

	input[type='range']::-webkit-slider-thumb {
		appearance: none;
		background-color: var(--theme-accent);
		border-radius: 100%;
		cursor: grab;
		height: var(--space-s);
		margin-top: calc(var(--space-xxs) * -1);
		width: var(--space-s);
	}

	input[type='range']:focus::-webkit-slider-thumb {
		box-shadow: 0 0 0 5px var(--theme-accent) inset;
		background-color: var(--color-white);
	}

	input[type='range']::-moz-range-thumb {
		appearance: none;
		background-color: var(--theme-text-primary);
		border-radius: 100%;
		cursor: grab;
		height: var(--space-s);
		margin-top: calc(var(--space-xxs) * -1);
		width: var(--space-s);
	}

	input[type='range']:focus::-moz-range-thumb {
		box-shadow: 0 0 0 5px var(--theme-accent) inset;
		background-color: var(--color-white);
	}
</style>
