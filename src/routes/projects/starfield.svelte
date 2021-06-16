<script lang="ts" context="module">
	import type { PostMeta } from '$lib/types';

	export const meta: PostMeta = {
		title: 'Starfield',
		heading: 'Starfield',
		description:
			"Seen in countless films when spaceships enter 'warp'. The starfield was also made popular in Windows 3.1 as a screen saver!",
		og: {
			image: '/preview/starfield.jpg',
		},
		isPublished: true,
		published: new Date('2021-06-01T08:00:21Z'),
	};
</script>

<script lang="ts">
	import Starfield from '$lib/projects/starfield/Starfield.svelte';
	import Page from '$lib/components/Page.svelte';
	import Range from '$lib/components/Range.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import Copy from '$lib/components/Copy.svelte';
	import track from '$lib/utils/track';
	import { throttle } from '$lib/utils/timing';

	let showFPS: boolean = false;
	let speed: number = 10;
	let withPride: boolean = false;
	let wrapper: HTMLDivElement;

	const trackShowFPSChange = () => {
		track('check', {
			category: 'starfield',
			label: 'showFPS',
			value: showFPS ? 1 : 0,
		});
	};

	const trackShowPrideChange = () => {
		track('check', {
			category: 'starfield',
			label: 'showPride',
			value: withPride ? 1 : 0,
		});
	};

	const trackSpeed = throttle(() => {
		track('change', {
			category: 'starfield',
			label: 'speed',
			value: speed,
		});
	}, 100);
</script>

<Page {meta}>
	<p slot="intro">
		This demo is rendered in 2D, but, using a little deception, we can give the appearance of 3D
		space.
	</p>
	<div class="wrapper full" bind:this={wrapper}>
		<Starfield {showFPS} {speed} {withPride} />
	</div>
	<div class="controls">
		<div>
			<label for="speed">Speed</label>
			<Range id="speed" min={2} max={40} step={0.5} bind:value={speed} on:input={trackSpeed} />
		</div>
		<Checkbox bind:checked={showFPS} on:change={trackShowFPSChange}>Show FPS</Checkbox>
		<Checkbox bind:checked={withPride} on:change={trackShowPrideChange} hint="Happy Pride Month!"
			>Show PRIDE</Checkbox
		>
	</div>
	<Copy>
		<h2>Pride</h2>
		<p>
			June is Pride month! To celebrate, I've added a Pride mode! You can enable it by selecting the
			'Show PRIDE' checkbox above. 🙌 🏳️‍🌈
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
		gap: var(--space-s);
	}

	@media screen and (min-width: 30rem) {
		.controls {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
