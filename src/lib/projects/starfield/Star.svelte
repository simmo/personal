<script lang="ts">
	import { type DrawFn, Layer } from '$lib/components/Canvas';
	import type { RGB } from './types';
	import { mapToRange } from '$lib/utils/mapToRange';
	import { speed } from '$lib/projects/starfield/config';

	export let x: number;
	export let y: number;
	export let z: number;
	export let colour: RGB;

	let zOrigin: number = z;

	const draw: DrawFn = ({ ctx, height, width }) => {
		const offsetX = width / 2;
		const offsetY = height / 2;
		const sx = mapToRange(x / z, 0, 1, 0, width) + offsetX;
		const sy = mapToRange(y / z, 0, 1, 0, height) + offsetY;
		const r = mapToRange(z, 0, width, 5, 0);
		const alpha = mapToRange(z, 0, width, 1, 0);

		ctx.beginPath();
		ctx.arc(sx, sy, r, 0, 2 * Math.PI);
		ctx.fillStyle = `rgba(${[...colour, alpha].join(',')})`;
		ctx.fill();
		ctx.closePath();

		const xOrigin = mapToRange(x / zOrigin, 0, 1, 0, width) + offsetX;
		const yOrigin = mapToRange(y / zOrigin, 0, 1, 0, height) + offsetY;
		const trailAlpha = mapToRange($speed, 5, 20, 0, 0.6);

		ctx.beginPath();
		ctx.moveTo(xOrigin, yOrigin);
		ctx.lineTo(sx, sy);
		ctx.strokeStyle = `rgba(${[...colour, trailAlpha].join(',')})`;
		ctx.stroke();
		ctx.closePath();

		zOrigin = z;
	};
</script>

<Layer {draw} />
