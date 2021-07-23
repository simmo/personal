<script lang="ts">
	import { hexToHsl, hexToRgb } from '$lib/utils/colours';
	import Range from '$lib/components/Range.svelte';
	import InlineDemo from '$lib/components/InlineDemo.svelte';
	import TwoColumnGrid from '$lib/components/TwoColumnGrid.svelte';
	import ColourInterpolation from './ColourInterpolation.svelte';

	let from = '#3498db';
	let to = '#c0392b';

	$: fromRgb = hexToRgb(from);
	$: toRgb = hexToRgb(to);

	let stops: number = 10;
</script>

<InlineDemo title="Colour Interpolation Visualiser">
	<TwoColumnGrid>
		<div>
			<label for="fromColor">From colour</label>
			<input id="fromColor" type="color" bind:value={from} />
			<ul>
				<li>Hex: {from}</li>
				<li>RGB: rgb({hexToRgb(from)})</li>
				<li>HSL: hsl({hexToHsl(from)})</li>
			</ul>
		</div>
		<div>
			<label for="toColour">To colour</label>
			<input id="toColour" type="color" bind:value={to} />
			<ul>
				<li>Hex: {to}</li>
				<li>RGB: rgb({hexToRgb(to)})</li>
				<li>HSL: hsl({hexToHsl(to)})</li>
			</ul>
		</div>
	</TwoColumnGrid>

	<div>
		<label for="step">Colour stops</label>
		<Range id="steps" min={5} max={50} step={1} bind:value={stops} />
	</div>

	<h4>RGB colour stops</h4>
	<ColourInterpolation {stops} from={fromRgb} to={toRgb} />

	<h4>HSL colour stops</h4>
	<ColourInterpolation {stops} mode="HSL" from={fromRgb} to={toRgb} />
</InlineDemo>
