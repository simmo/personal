<script lang="ts">
	import ColourTile from '$lib/components/ColourTile.svelte';
	import InlineDemo from '$lib/components/InlineDemo.svelte';
	import Range from '$lib/components/Range.svelte';
	import { rgbToHex } from '../utils/rgbToHex';
	import { hexToRgb } from '../utils/hexToRgb';

	export let value: string;

	let [red, green, blue] = hexToRgb(value);
	let alpha = 1;

	$: alphaAsHex = Math.round(255 * alpha)
		.toString(16)
		.padStart(2, '0');

	$: hex = `${rgbToHex([red, green, blue])}${alpha === 1 ? '' : alphaAsHex}`;
</script>

<InlineDemo title="HEX Visualiser" description="Use the sliders below to generate a HEX colour.">
	<div class="controls">
		<div>
			<label for="red">Red</label>
			<Range id="red" min={0} max={255} step={1} bind:value={red} />
		</div>
		<div>
			<label for="green">Green</label>
			<Range id="green" min={0} max={255} step={1} bind:value={green} />
		</div>
		<div>
			<label for="blue">Blue</label>
			<Range id="blue" min={0} max={255} step={1} bind:value={blue} />
		</div>
		<div>
			<label for="alpha">Alpha</label>
			<Range id="alpha" min={0} max={1} step={0.01} bind:value={alpha} />
		</div>
	</div>
	<div class="tile"><ColourTile colour={hex} /></div>
</InlineDemo>

<style>
	.controls {
		display: grid;
		gap: var(--space-m);
	}

	.tile {
		border-radius: var(--space-xxs);
		display: grid;
		overflow: hidden;
	}
</style>
