<script lang="ts">
	import { Layer } from '$lib/components/Canvas';
	import type { DrawFn } from '$lib/components/Canvas';
	import type { Walls } from './types';
	import getCssVar from '$lib/utils/getCssVar';

	export let column: number;
	export let current: boolean = false;
	export let inStack: boolean = false;
	export let row: number;
	export let size: number;
	export let walls: Walls;
	export let isBacktracking: boolean;

	const lineWidth = 2;

	const draw: DrawFn = ({ ctx }) => {
		const x = column * size;
		const y = row * size;

		const wallsToRender: [
			visible: boolean,
			from: { x: number; y: number },
			to: { x: number; y: number }
		][] = [
			[walls.top, { x, y }, { x: x + size, y }],
			[walls.right, { x: x + size, y }, { x: x + size, y: y + size }],
			[walls.bottom, { x, y: y + size }, { x: x + size, y: y + size }],
			[walls.left, { x, y }, { x, y: y + size }],
		];

		ctx.lineWidth = lineWidth;
		ctx.lineCap = 'square';
		ctx.strokeStyle = getCssVar('--theme-text-primary');

		if (inStack) {
			ctx.fillStyle = getCssVar('--theme-highlight');
			ctx.fillRect(x, y, size, size);
		}

		if (current) {
			ctx.fillStyle = isBacktracking ? getCssVar('--color-purple') : getCssVar('--theme-accent');
			ctx.fillRect(x, y, size, size);
		}

		wallsToRender.forEach(([visible, from, to]) => {
			if (visible) {
				ctx.beginPath();
				ctx.moveTo(from.x, from.y);
				ctx.lineTo(to.x, to.y);
				ctx.stroke();
			}
		});
	};
</script>

<Layer {draw} />
