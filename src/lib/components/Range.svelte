<script lang="ts">
	export let max: number = 100;
	export let min: number = 0;
	export let id: string;
	export let step: number = 1;
	export let value: number = 0;

	let input: HTMLInputElement;

	$: {
		if (input) {
			const cssValue = ((value - min) / (max - min)) * 100;

			input.style.setProperty('--value', cssValue.toString());
		}
	}
</script>

<input {max} {min} {id} {step} bind:this={input} type="range" bind:value on:input />

<style>
	input[type='range'] {
		appearance: none;
		background: none;
		border: 0;
		border-radius: 500px;
		margin: 0;
		padding: 0;
		width: 100%;
	}

	input[type='range']:focus {
		outline: none;
	}

	input[type='range']::-webkit-slider-runnable-track {
		background-color: var(--theme-background-secondary);
		background-image: linear-gradient(
			90deg,
			var(--theme-accent),
			var(--theme-accent) calc(var(--value) * 1%),
			transparent calc(var(--value) * 1%)
		);
		border-radius: 500px;
		height: var(--space-xxs);
	}

	input[type='range']::-moz-range-track {
		background-color: var(--theme-background-secondary);
		background-image: linear-gradient(
			90deg,
			var(--theme-accent),
			var(--theme-accent) calc(var(--value) * 1%),
			transparent calc(var(--value) * 1%)
		);
		border-radius: 500px;
		height: var(--space-xxs);
	}

	input[type='range']::-webkit-slider-thumb {
		appearance: none;
		background-color: var(--theme-accent);
		border: 0;
		border-radius: 100%;
		box-shadow: 0 0 var(--space-xxs) var(--theme-shadow);
		cursor: grab;
		height: var(--space-s);
		margin-top: calc(((var(--space-s) - var(--space-xxs)) / 2) * -1);
		position: relative;
		transition-duration: 0.3s;
		transition-property: background-color, box-shadow;
		width: var(--space-s);
	}

	input[type='range']::-moz-range-thumb {
		appearance: none;
		background-color: var(--theme-accent);
		border: 0;
		border-radius: 100%;
		box-shadow: 0 0 var(--space-xxs) var(--theme-shadow);
		cursor: grab;
		height: var(--space-s);
		margin-top: calc(((var(--space-s) - var(--space-xxs)) / 2) * -1);
		position: relative;
		transition-duration: 0.3s;
		transition-property: background-color, box-shadow;
		width: var(--space-s);
	}

	/* input[type='range']::-webkit-slider-thumb:active {
		background-color: var(--color-pink);
	}

	input[type='range']::-moz-range-thumb:active {
		background-color: var(--color-pink);
	} */

	input[type='range']:focus::-webkit-slider-thumb,
	input[type='range']::-webkit-slider-thumb:hover {
		box-shadow: 0 0 var(--space-xxs) var(--theme-shadow),
			0 0 0 var(--space-xxs) var(--theme-highlight);
	}

	input[type='range']:focus::-moz-range-thumb,
	input[type='range']::-moz-range-thumb:hover {
		box-shadow: 0 0 var(--space-xxs) var(--theme-shadow),
			0 0 0 var(--space-xxs) var(--theme-highlight);
	}
</style>
