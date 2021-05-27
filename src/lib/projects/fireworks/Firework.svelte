<script lang="ts">
	import { Layer } from '$lib/components/Canvas';
	import type { DrawFn } from '$lib/components/Canvas';
	import getCssVar from '$lib/utils/getCssVar';
	import type { HSL, Point, Particle, Sparkle } from './types';
	import { random } from '$lib/utils/maths';

	export let colour: HSL;
	export let isExploded: boolean = false;
	export let payload: Sparkle[];
	export let position: Point;

	const draw: DrawFn = ({ ctx }) => {
		if (!isExploded) {
			ctx.beginPath();
			ctx.fillStyle = '#fff';
			ctx.arc(position.x, position.y, 1, 0, 2 * Math.PI);
			ctx.fill();
		}

		if (!!payload.length) {
			payload.forEach((particle) => {
				ctx.beginPath();
				ctx.arc(particle.position.x, particle.position.y, 1, 0, 2 * Math.PI);
				ctx.fillStyle = `hsla(${[...colour, random(0, 1) <= 0.6 ? particle.alpha : 0].join(',')})`;
				ctx.fill();
			});
		}
	};
</script>

<Layer {draw} />
