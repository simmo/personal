<script lang="ts">
	import type { DrawFn } from '$lib/components/Canvas';
	import Canvas from '$lib/components/Canvas/Canvas.svelte';
	import Layer from '$lib/components/Canvas/Layer.svelte';
	import { mapToRange } from '$lib/utils/mapToRange';
	import { onMount } from 'svelte';

	const canvasWidth = 1800;
	const canvasHeight = 900;

	const gap = 100;
	const dot = 1;
	const dotOffset = (gap - dot) / 2;
	const repel = 100;

	let pointer: null | { x: number; y: number } = null;

	let points: [x: number, y: number][][] = Array.from({ length: canvasWidth / gap }, (col, colI) =>
		Array.from({ length: canvasHeight / gap }, (row, rowI) => [
			colI * gap + dotOffset,
			rowI * gap + dotOffset,
		])
	);

	const drawDot =
		({ x, y }): DrawFn =>
		({ ctx, width, height }) => {
			let xInRange = false;
			let yInRange = false;
			let xOffset = x;
			let yOffset = y;
			let fillStyle = '#999';

			if (pointer) {
				const dX = x - (pointer.x - gap);
				const dY = y - (pointer.y - gap);

				const distance = Math.sqrt(dX * dX + dY * dY);

				xOffset += (width / 2 - gap * 2) / distance;
				yOffset += (height / 2 - gap) / distance;
				// xOffset += Math.hypot(pointer.x, x) / 2;
				// yOffset += Math.hypot(y, pointer.y);
				// yOffset -= Math.hypot(dX, dY);

				// 1 / (distance * distance)

				// const distance = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));
				// const angle = Math.atan2(dY, dX);

				// if (distance !== 0) {
				// 	const attractionAcceleration = 1 / Math.pow(distance, 2); //add mass calculation later when mass is variable
				// 	xOffset += angle;
				// 	yOffset -= angle;
				// }

				// xOffset = mapToRange(dX, gap * -3, gap * 3, gap * -5, gap * 5);
				// yOffset = mapToRange(dY, gap * -3, gap * 3, gap * -5, gap * 5);

				// 3/3=1
				// 3/2=1.5
				// 3/1=3

				// xOffset = mapToRange(Math.round(dX / gap), -2, 2, gap * -4, gap * 4);

				// xOffset = dX * Math.abs(Math.round(dX / gap));
				// if (Math.abs(Math.round(dX / gap)) <= 3) {
				// }

				// if (gapMultipliers === 3) {
				// 	fillStyle = 'yellow';
				// } else if (gapMultipliers === 2) {
				// 	fillStyle = 'orange';
				// } else if (gapMultipliers <= 1) {
				// 	fillStyle = 'red';
				// }
			}

			ctx.beginPath();
			ctx.arc(xOffset, yOffset, dot, 0, 2 * Math.PI);

			ctx.fillStyle = fillStyle;
			ctx.fill();
		};

	const drawPointer: DrawFn = ({ ctx }) => {
		if (pointer) {
			ctx.beginPath();
			ctx.arc(pointer.x, pointer.y, dot * 10, 0, 2 * Math.PI);
			ctx.fillStyle = `red`;
			ctx.fill();
		}
	};
</script>

<div
	class="full"
	on:mousemove={(event) => {
		pointer = {
			x: (event.offsetX * canvasWidth) / event.currentTarget.clientWidth,
			y: (event.offsetY * canvasHeight) / event.currentTarget.clientHeight,
		};
	}}
	on:mouseleave={() => {
		pointer = null;
	}}
>
	<Canvas height={canvasHeight} width={canvasWidth}>
		{#each points as col}
			{#each col as [x, y]}
				<Layer draw={drawDot({ x, y })} />
			{/each}
		{/each}
		<Layer draw={drawPointer} />
	</Canvas>
</div>

<style>
	div {
		border-bottom: 1px solid #333;
		border-top: 1px solid #333;
	}
</style>
