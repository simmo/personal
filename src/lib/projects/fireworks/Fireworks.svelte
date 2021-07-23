<script lang="ts">
	import { Canvas, tick } from '$lib/components/Canvas';
	import { random } from '$lib/utils/maths';
	import Firework from './Firework.svelte';
	import type { FireworkParticle } from './types';
	import createFirework from './utils/createFirework';
	import createPoint from './utils/createPoint';
	import createSparkle from './utils/createSparkle';

	const canvasHeight = 900;
	const canvasWidth = 1800;
	const gravity = createPoint(0, 0.2);

	let fireworks: FireworkParticle[] = [];

	$: inFlight = fireworks.length;

	$: particles = fireworks.reduce(
		(sum, firework) => sum + firework.payload.filter((sparkle) => sparkle.alpha > 0).length,
		0
	);

	$: $tick &&
		(() => {
			const newFireWork =
				random(0, 50) < 2
					? [
							createFirework(
								Math.round(random(canvasWidth * 0.3, canvasWidth * 0.7)),
								canvasHeight + random(0, 20)
							),
					  ]
					: [];

			fireworks = fireworks
				.filter((firework) => !firework.done)
				.map((firework) => {
					if (!firework.isExploded) {
						firework.acceleration.add(gravity);
						firework.velocity.add(firework.acceleration);
						firework.position.add(firework.velocity);
						firework.acceleration.set(0);

						if (firework.velocity.y > random(-3, 3)) {
							firework.payload = Array.from({ length: 200 }, () => ({
								...createSparkle(firework.position.x, firework.position.y),
								velocity: createPoint(random(-10, 10), random(-10, 10)),
							}));
							firework.isExploded = true;
						}
					} else {
						firework.done = !firework.payload.some((sparkle) => sparkle.alpha > 0);

						if (!firework.done) {
							firework.payload = firework.payload.map((sparkle) => {
								sparkle.acceleration.add(gravity);
								sparkle.velocity.add(sparkle.acceleration);
								sparkle.position.add(sparkle.velocity);
								sparkle.acceleration.set(0);
								sparkle.alpha -= 0.015;

								return sparkle;
							});
						}
					}

					return firework;
				})
				.concat(newFireWork);
		})();
</script>

<div class="wrapper full">
	<Canvas autoClear={true} height={canvasHeight} width={canvasWidth}>
		{#each fireworks as { colour, position, isExploded, payload }}
			<Firework {colour} {position} {isExploded} {payload} />
		{/each}
	</Canvas>
</div>
<div>
	<p>🚀 In flight: {inFlight}</p>
	<p>✨ Particles: {particles}</p>
</div>

<style>
	.wrapper {
		background-color: var(--color-black);
	}
</style>
