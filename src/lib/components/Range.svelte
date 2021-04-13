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
		transition-duration: 0.3s;
		transition-property: background-color, box-shadow;
		width: var(--space-s);
	}

	input[type='range']::-moz-range-thumb {
		appearance: none;
		background-color: var(--theme-text-primary);
		border-radius: 100%;
		cursor: grab;
		height: var(--space-s);
		margin-top: calc(var(--space-xxs) * -1);
		transition-duration: 0.3s;
		transition-property: background-color, box-shadow;
		width: var(--space-s);
	}

	input[type='range']:active::-webkit-slider-thumb {
		background-color: hsl(145, 63%, 49%);
	}

	input[type='range']:active::-moz-range-thumb {
		background-color: hsl(145, 63%, 49%);
	}

	input[type='range']:focus::-webkit-slider-thumb,
	input[type='range']:hover::-webkit-slider-thumb {
		box-shadow: 0 0 0 var(--space-xxs) hsla(0, 100%, 100%, 15%);
	}

	input[type='range']:focus::-moz-range-thumb,
	input[type='range']:hover::-moz-range-thumb {
		box-shadow: 0 0 0 var(--space-xs) hsla(0, 100%, 100%, 10%);
	}

	input[type='range']:focus::-moz-range-thumb {
		box-shadow: 0 0 0 5px var(--theme-accent) inset;
		background-color: var(--color-grey-100);
	}
</style>
