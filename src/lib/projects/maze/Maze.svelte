<script lang="ts">
	import { Canvas, tick } from '$lib/components/Canvas';
	import Cell from '$lib/projects/maze/Cell.svelte';
	import type { Item } from '$lib/projects/maze/types';
	import { random } from '$lib/utils/maths';
	import { state, State } from '$lib/projects/maze/config';

	export let cellSize = 20;
	export let canvasHeight = 500;
	export let canvasWidth = 1000;
	const rows = canvasHeight / cellSize;
	const columns = canvasWidth / cellSize;

	let grid: Item[][] = [];
	let stack: Item[] = [];
	let current: Item | null;
	let isBacktracking: boolean = false;

	$: frameRate = Math.floor($tick / 50);

	$: {
		if ($state === State.Playing && current) {
			let neighbours = [
				[current.row - 1, current.column],
				[current.row, current.column + 1],
				[current.row + 1, current.column],
				[current.row, current.column - 1],
			].filter(
				([row, column]) =>
					Math.min(row, column) >= 0 && row < rows && column < columns && !grid[row][column].visited
			);

			if (frameRate && neighbours.length) {
				isBacktracking = false;

				const [nextRow, nextColumn] = neighbours[Math.floor(random(neighbours.length))];
				const next = grid[nextRow][nextColumn];

				next.visited = true;

				stack = [...stack, current];

				const rowDiff = current.row - next.row;
				const columnDiff = current.column - next.column;

				if (rowDiff === 1) {
					current.walls.top = false;
					next.walls.bottom = false;
				} else if (rowDiff === -1) {
					current.walls.bottom = false;
					next.walls.top = false;
				} else if (columnDiff === 1) {
					current.walls.left = false;
					next.walls.right = false;
				} else if (columnDiff === -1) {
					current.walls.right = false;
					next.walls.left = false;
				}

				current = next;
			} else {
				isBacktracking = true;

				const next = stack.pop();

				stack = [...stack];

				if (next) {
					current = next;
				} else {
					$state = State.Completed;
					current = null;
				}
			}
		} else if ($state === State.Idle) {
			for (let row = 0; row < rows; row++) {
				grid[row] = [];

				for (let column = 0; column < columns; column++) {
					grid[row][column] = {
						column,
						row,
						size: cellSize,
						walls: { top: true, right: true, bottom: true, left: true },
						visited: false,
						is(item: Item) {
							return item.row === this.row && item.column === this.column;
						},
					};
				}
			}

			current = grid[0][0];
			current.visited = true;
			stack = [];
		}
	}
</script>

<div class="offset wrapper">
	<Canvas height={canvasHeight} width={canvasWidth}>
		{#each grid as row}
			{#each row as { column, row, size, walls }}
				<Cell
					{column}
					{row}
					{size}
					{walls}
					current={$state !== State.Idle && current?.is({ column, row })}
					{isBacktracking}
					inStack={!!stack.find(
						(stackItem) => row === stackItem.row && column === stackItem.column
					)}
				/>
			{/each}
		{/each}
	</Canvas>
</div>

<style>
	.wrapper {
		border: 1px solid var(--theme-text-primary);
	}
</style>
