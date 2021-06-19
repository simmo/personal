<script lang="ts">
	import { Canvas, tick, Layer } from '$lib/components/Canvas';
	import type { DrawFn } from '$lib/components/Canvas';
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

	const drawBackground: DrawFn = ({ ctx }) => {
		ctx.fillStyle = 'rgba(0,0,0,0.1)';
		ctx.fillRect(0, 0, canvasWidth, canvasHeight);
	};

	const update = () => {
		fireworks = fireworks.filter((firework) => !firework.done);

		const nextTick = fireworks.map((firework) => {
			if (!firework.isExploded) {
				firework.acceleration.add(gravity);
				firework.velocity.add(firework.acceleration);
				firework.position.add(firework.velocity);
				firework.acceleration.set(0);

				if (firework.velocity.y > Math.round(random(-3, 3))) {
					firework.payload = Array.from({ length: 100 }, () => ({
						...createSparkle(firework.position.x, firework.position.y),
						velocity: createPoint(Math.round(random(-5, 5)), Math.round(random(-5, 5))),
					}));
					firework.isExploded = true;
				}
			} else {
				firework.done = !firework.payload.some((sparkle) => sparkle.alpha > 0);
				firework.payload = firework.payload.map((sparkle) => {
					sparkle.acceleration.add(gravity);
					sparkle.velocity.add(sparkle.acceleration);
					sparkle.position.add(sparkle.velocity);
					sparkle.acceleration.set(0);
					sparkle.alpha -= 0.02;

					return sparkle;
				});
			}

			return { ...firework };
		});

		const randomiser = random(0, 100);

		if (randomiser < 2) {
			nextTick.push(
				createFirework(
					Math.round(random(canvasWidth * 0.1, canvasWidth * 0.9)),
					canvasHeight + Math.round(random(0, 20))
				)
			);
		}

		fireworks = nextTick;
	};

	$: $tick && update();
</script>

<div class="wrapper full">
	<Canvas autoClear={false} height={canvasHeight} width={canvasWidth}>
		<Layer draw={drawBackground} />
		{#each fireworks as { colour, position, isExploded, payload }}
			<Firework {colour} {position} {isExploded} {payload} />
		{/each}
	</Canvas>
</div>
<div>
	<p>In flight: {fireworks.length}</p>
</div>

<style>
	.wrapper {
		background-color: var(--color-black);
		background-image: linear-gradient(var(--color-black), rgb(0, 0, 20));
	}
</style>
