<script lang="ts">
	import ColourTile from '$lib/components/ColourTile.svelte';
	import InlineDemo from '$lib/components/InlineDemo.svelte';
	import Range from '$lib/components/Range.svelte';
	import { hexToRgb } from '$lib/utils/colours';

	export let value: string;

	let [red, green, blue] = hexToRgb(value);
	let alpha = 1;

	$: rgb = `${alpha === 1 ? 'rgb' : 'rgba'}(${red}, ${green}, ${blue}${
		alpha === 1 ? '' : `, ${alpha}`
	})`;
</script>

<InlineDemo
	title="RGB/RGBA Visualiser"
	description="Use the sliders below to generate an RGB(A) colour."
>
	<div class="controls">
		<div>
			<label for="rgb_red">Red</label>
			<Range id="rgb_red" min={0} max={255} step={1} bind:value={red} />
		</div>
		<div>
			<label for="rgb_green">Green</label>
			<Range id="rgb_green" min={0} max={255} step={1} bind:value={green} />
		</div>
		<div>
			<label for="rgb_blue">Blue</label>
			<Range id="rgb_blue" min={0} max={255} step={1} bind:value={blue} />
		</div>
		<div>
			<label for="rgb_alpha">Alpha</label>
			<Range id="rgb_alpha" min={0} max={1} step={0.01} bind:value={alpha} />
		</div>
	</div>
	<div class="tile"><ColourTile colour={rgb} /></div>
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
