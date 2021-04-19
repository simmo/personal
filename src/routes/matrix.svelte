<script lang="ts">
	import { Canvas, Layer } from '$lib/components/Canvas';
	import type { Config } from '$lib/components/Canvas';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import Copy from '$lib/components/Copy.svelte';
	import Link from '$lib/components/Link.svelte';
	import Page from '$lib/components/Page.svelte';
	import Stream from '$lib/projects/matrix/Stream.svelte';
	import getCssVar from '$lib/utils/getCssVar';
	import track from '$lib/utils/track';

	const canvasWidth = 1800;
	const totalStreams = 50;
	const size = Math.floor(canvasWidth / totalStreams);
	const streams = Array.from({ length: totalStreams }, (_, index) => size * index);

	let showFPS = false;
	let blur = false;

	const trackShowFPSChange = () => {
		track('check', {
			category: 'matrix',
			label: 'showFPS',
			value: showFPS ? 1 : 0,
		});
	};

	const trackBlurChange = () => {
		track('check', {
			category: 'matrix',
			label: 'blur',
			value: blur ? 1 : 0,
		});
	};

	const drawBackground = ({ ctx, height, width }: Config) => {
		ctx.fillStyle = getCssVar('--color-black');
		ctx.fillRect(0, 0, width, height);
	};
</script>

<Page
	pageTitle="Matrix digital rain"
	heading="Matrix digital rain"
	description="Using canvas to recreate the iconic raining code, as seen in the Matrix films."
>
	<div class="full wrapper">
		<Canvas height={900} width={canvasWidth} {showFPS} alpha={false}>
			<Layer draw={drawBackground} />
			{#each streams as x}
				<Stream {x} {size} {blur} />
			{/each}
		</Canvas>
	</div>
	<div class="controls">
		<Checkbox bind:checked={showFPS} on:change={trackShowFPSChange}>Show FPS</Checkbox>
		<Checkbox
			bind:checked={blur}
			on:change={trackBlurChange}
			hint="May not perform well in some browsers!"
		>
			Use shadow
		</Checkbox>
	</div>
	<Copy>
		<h2>Research</h2>
		<p>
			After a little searching, it appeared <Link
				href="https://en.wikipedia.org/wiki/Katakana_(Unicode_block)">Katakana</Link
			> characters mixed with some single digit numbers closely matched the characters used in the film.
		</p>
		<p>The Katakana characters start in unicode from <code>U+30a0</code> for 96 characters.</p>
		<h2>Performance</h2>
		<p>
			On my MacBook Pro, the 50 columns of characters render at a steady 60fps. When I tried kicking
			it up to 100 columns, things got a little jumpy, dropping to about 20fps. I'm wondering if
			some sort of quad-tree type structure could be used to reduce the number of operations/renders
			needed.
		</p>
	</Copy>
</Page>

<style>
	.wrapper {
		background-color: var(--color-black);
		position: relative;
	}

	.wrapper::after {
		bottom: 0;
		box-shadow: 0 0 var(--space-s) var(--space-xxs) var(--color-black) inset;
		content: '';
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
	}

	.controls {
		display: grid;
		column-gap: var(--space-s);
	}
</style>
