<script lang="ts">
	import ColourTile from '$lib/components/ColourTile.svelte';
	import type { RGB } from '$lib/utils/colours';
	import { rgb } from '$lib/utils/colours';
	import { interpolateHsl } from '../utils/interpolateHsl';
	import { interpolateRgb } from '../utils/interpolateRgb';

	export let from: RGB;
	export let to: RGB;
	export let stops: number = 2;
	export let mode: 'RGB' | 'HSL' = 'RGB';

	$: console.log({ from: rgb(from), to: rgb(to) });

	$: colourStop = mode === 'RGB' ? interpolateRgb(from, to) : interpolateHsl(from, to);

	$: colours = Array.from({ length: stops }, (_, i) => rgb(colourStop((1 / (stops - 1)) * i)));
</script>

<div class="colours">
	{#each colours as colour}
		<ColourTile {colour} compact />
	{/each}
</div>

<style>
	.colours {
		background-color: var(--theme-background-secondary);
		border-radius: var(--space-xxs);
		display: grid;
		gap: 1px;
		grid-auto-flow: column;
		grid-template-columns: repeat(auto-fit, minmax(min-content, 1fr));
		list-style: none;
		font-size: var(--text-xs);
		padding: 0;
		overflow: hidden;
		height: var(--text-xl);
	}
</style>
