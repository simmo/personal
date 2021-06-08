<script lang="ts">
	import { Canvas, tick } from '$lib/components/Canvas';
	import { random } from '$lib/utils/maths';
	import StarLayer from './Star.svelte';
	import type { RGB, Star } from './types';

	export let speed: number;
	export let showFPS: boolean = false;
	export let withPride: boolean = false;

	const canvasWidth = 1800;
	const canvasHeight = 900;
	const colours: RGB[] = [
		[255, 255, 255], // White
		[120, 79, 23], // Brown
		[228, 3, 3], // Red
		[255, 140, 0], // Orange
		[255, 237, 0], // Yellow
		[0, 128, 38], // Green
		[0, 77, 255], // Blue
		[117, 7, 135], // Violet/Purple
	];
	const createStar = () => {
		const z = Math.round(random(canvasWidth));

		return {
			x: Math.round(random(-canvasWidth / 2, canvasWidth / 2)),
			y: Math.round(random(-canvasHeight / 2, canvasHeight / 2)),
			z,
			colour: withPride ? colours[Math.round(random(colours.length - 1))] : colours[0],
		};
	};

	let stars: Star[] = Array.from({ length: 1000 }, createStar);

	const update = () => {
		stars = stars.map((star) => {
			const nextZ = star.z - speed;

			return nextZ < 1 ? createStar() : { ...star, z: nextZ };
		});
	};

	$: $tick && update();
</script>

<Canvas height={canvasHeight} width={canvasWidth} {showFPS}>
	{#each stars as star}
		<StarLayer {...star} {speed} />
	{/each}
</Canvas>
