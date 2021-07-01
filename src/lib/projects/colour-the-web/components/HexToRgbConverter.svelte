<script lang="ts">
	import InlineDemo from '$lib/components/InlineDemo.svelte';
	import type { Hex } from '../types';
	import { hexToRgb } from '../utils/hexToRgb';

	export let value: Hex;

	$: [red, green, blue] = hexToRgb(value);

	$: [redPercent, greenPercent, bluePercent] = [red, green, blue].map(
		(colour) => `${Math.round((colour / 255) * 100)}%`
	);
</script>

<InlineDemo
	title="Hex to RGB converter"
	description="Select a colour using the colour picker and watch the RGB values change."
>
	<div>
		<label for="hex">Select a colour</label>
		<input id="hex" type="color" bind:value />
		<strong>{value}</strong>
	</div>
	<ul class="output">
		<li>Red: <strong>{red} ({redPercent})</strong></li>
		<li>Green: <strong>{green} ({greenPercent})</strong></li>
		<li>Blue: <strong>{blue} ({bluePercent})</strong></li>
	</ul>
</InlineDemo>

<style>
	.output {
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
