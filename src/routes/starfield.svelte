<script lang="ts">
	import Starfield from '$lib/projects/starfield/Starfield.svelte';
	import Page from '$lib/components/Page.svelte';
	import Range from '$lib/components/Range.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import Copy from '$lib/components/Copy.svelte';
	import { offset } from '$lib/projects/starfield/store';
	import { browser } from '$app/env';

	let showFPS: boolean = false;
	let speed: number = 10;
	let withPride: boolean = false;
	let useMouse: boolean = false;
	let wrapper: HTMLDivElement;

	const handleMouseMove = (event: MouseEvent) => {
		window.requestAnimationFrame(() => {
			const x = event.offsetX - Math.round(wrapper.clientWidth / 2);
			const y = event.offsetY - Math.round(wrapper.clientHeight / 2);

			offset.set({ x, y });
		});
	};

	$: {
		if (browser && wrapper) {
			if (useMouse) {
				wrapper.addEventListener('mousemove', handleMouseMove);
			} else {
				wrapper.removeEventListener('mousemove', handleMouseMove);

				offset.set({ x: 0, y: 0 });
			}
		}
	}
</script>

<svelte:head>
	<meta property="og:image" content="https://mike.id/preview/starfield.jpg" />
</svelte:head>

<Page
	pageTitle="Starfield"
	heading="Starfield"
	description="Seen in countless films when spaceships enter 'warp'. The starfield was also made popular in
Windows 3.1 as a screen saver!"
>
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
			<Range id="speed" min={2} max={40} step={0.5} bind:value={speed} />
		</div>
		<div>
			<Checkbox bind:checked={showFPS}>Show FPS</Checkbox>
			<Checkbox bind:checked={useMouse}>Allow mouse to control offset</Checkbox>
		</div>
		<Checkbox bind:checked={withPride} hint="Happy Pride Month!">Show PRIDE</Checkbox>
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
		grid-template-columns: 1fr 1fr 1fr;
	}

	.directions {
		display: grid;
		gap: var(--space-xxs);
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
	}
</style>
