<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { Canvas, tick } from '$lib/components/Canvas';
	import Pause from '$lib/icons/Pause.svelte';
	import Reset from '$lib/icons/Reset.svelte';
	import Start from '$lib/icons/Start.svelte';
	import Cell from '$lib/projects/maze/Cell.svelte';
	import type { Item } from '$lib/projects/maze/types';
	import { onMount } from 'svelte';

	export let play: boolean = false;
	export let cellSize = 50;
	export let canvasHeight = 500;
	export let canvasWidth = 1000;
	const rows = canvasHeight / cellSize;
	const columns = canvasWidth / cellSize;

	enum State {
		Idle,
		Playing,
		Paused,
		Completed,
	}

	let grid: Item[][] = [];
	let stack: Item[] = [];
	let current: Item | null;
	let state: State = play ? State.Playing : State.Idle;
	let isBacktracking: boolean = false;

	const reset = () => {
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
		state = State.Idle;
	};

	onMount(reset);

	$: frameRate = Math.floor($tick / 100);

	$: {
		if (state === State.Playing && current) {
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

				const [nextRow, nextColumn] = neighbours[Math.floor(Math.random() * neighbours.length)];
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
					state = State.Completed;
					current = null;
				}
			}
		}
	}
</script>

<div class="wrapper">
	<div class="canvas">
		<Canvas height={canvasHeight} width={canvasWidth}>
			{#each grid as row}
				{#each row as { column, row, size, walls }}
					<Cell
						{column}
						{row}
						{size}
						{walls}
						current={state !== State.Idle && current?.is({ column, row })}
						{isBacktracking}
						inStack={!!stack.find(
							(stackItem) => row === stackItem.row && column === stackItem.column
						)}
					/>
				{/each}
			{/each}
		</Canvas>
	</div>
	<div>
		<Button
			on:click={() => {
				state = state === State.Playing ? State.Paused : State.Playing;
			}}
			disabled={state === State.Completed}
		>
			{#if state === State.Playing}
				<Pause /> Pause
			{:else}
				<Start /> Play
			{/if}
		</Button>
		<Button on:click={reset} disabled={state === State.Playing || state === State.Idle}>
			<Reset /> Reset
		</Button>
	</div>
</div>

<style>
	.wrapper {
		display: grid;
		row-gap: var(--space-s);
	}

	.canvas {
		border: 1px solid var(--theme-text-primary);
	}
</style>
