<script lang="ts">
	import ColourTile from '$lib/components/ColourTile.svelte';
	import InlineDemo from '$lib/components/InlineDemo.svelte';
	import Range from '$lib/components/Range.svelte';
	import { hexToRgb } from '../utils/hexToRgb';
	import { rgbToHsl } from '../utils/rgbToHsl';

	export let value: string;

	let [hue, saturation, lightness] = rgbToHsl(hexToRgb(value));
	let alpha = 1;

	$: hsl = `${alpha === 1 ? 'hsl' : 'hsla'}(${hue}, ${saturation}%, ${lightness}%${
		alpha === 1 ? '' : `, ${alpha}`
	})`;
</script>

<InlineDemo
	title="HSL/HSLA Visualiser"
	description="Use the sliders below to generate an HSL(A) colour."
>
	<div class="controls">
		<div>
			<label for="hue">Hue</label>
			<Range id="hue" min={0} max={360} step={1} bind:value={hue} />
		</div>
		<div>
			<label for="saturation">Saturation</label>
			<Range id="saturation" min={0} max={100} step={1} bind:value={saturation} />
		</div>
		<div>
			<label for="lightness">Lightness</label>
			<Range id="lightness" min={0} max={100} step={1} bind:value={lightness} />
		</div>
		<div>
			<label for="alpha">Alpha</label>
			<Range id="alpha" min={0} max={1} step={0.01} bind:value={alpha} />
		</div>
	</div>
	<div class="tile"><ColourTile colour={hsl} /></div>
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
