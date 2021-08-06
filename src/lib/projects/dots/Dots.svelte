<script lang="ts">
	import type { DrawFn } from '$lib/components/Canvas';
	import Canvas from '$lib/components/Canvas/Canvas.svelte';
	import Layer from '$lib/components/Canvas/Layer.svelte';
	import { onMount } from 'svelte';

	const canvasWidth = 1800;
	const canvasHeight = 900;

	const gap = 200;
	const dot = 2;
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
		({ ctx }) => {
			let xInRange = false;
			let yInRange = false;
			let xOffset = 0;
			let yOffset = 0;

			if (pointer) {
				const max = gap * 2.5;
				const dX = x - pointer.x;
				const dY = y - pointer.y;

				xInRange = Math.abs(dX) <= max;
				yInRange = Math.abs(dY) <= max;

				if (xInRange) {
					xOffset = gap / dX;
				}
			}

			ctx.beginPath();
			ctx.arc(x + xOffset, y + yOffset, dot, 0, 2 * Math.PI);
			ctx.fillStyle = xInRange && yInRange ? 'green' : `#fff`;
			ctx.fill();
		};

	const drawPointer: DrawFn = ({ ctx }) => {
		if (pointer) {
			ctx.beginPath();
			ctx.arc(pointer.x, pointer.y, dot, 0, 2 * Math.PI);
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
