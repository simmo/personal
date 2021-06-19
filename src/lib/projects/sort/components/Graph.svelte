<script lang="ts">
	import { onMount } from 'svelte';

	import Button from '$lib/components/Button.svelte';
	import type { Sorter } from '$lib/projects/sort/types';
	import track from '$lib/utils/track';
	import Pause from '$lib/icons/Pause.svelte';
	import Start from '$lib/icons/Start.svelte';
	import Next from '$lib/icons/Next.svelte';
	import Reset from '$lib/icons/Reset.svelte';
	import { isDarkMode } from '$lib/store/darkMode';
	import getCssVar from '$lib/utils/getCssVar';

	export let items: number[];
	export let name: string;
	export let sort: Sorter;
	export let speed: number = 0;

	const enum State {
		Idle = 'IDLE',
		Running = 'RUNNING',
		Paused = 'PAUSED',
		Done = 'DONE',
	}

	let sortedItems: number[];
	let intervalId: ReturnType<typeof setTimeout>;

	let comparisonsCount: number = 0;
	let iterationsCount: number = 0;
	let operationsCount: number = 0;

	let pointers: number[] = [];
	let pivots: number[] = [];
	let comparisions: number[] = [];
	let operations: number[] = [];
	let sorted: number[] = [];

	let sorter: ReturnType<Sorter>;
	let state = State.Idle;
	let canvas: HTMLCanvasElement;
	let frameId: number;

	$: running = state === State.Running;
	$: paused = state === State.Paused;
	$: complete = state === State.Done;

	let dpr = 1;

	function draw() {
		frameId = window.requestAnimationFrame(() => {
			if (!canvas) return;

			const ctx = canvas.getContext('2d');

			if (!ctx) return;

			const colors = {
				operation: getCssVar('--color-green'),
				comparision: getCssVar('--color-pink'),
				sorted: getCssVar('--theme-text-primary'),
				unsorted: getCssVar('--theme-text-secondary'),
				pointer: getCssVar('--color-blue'),
				pivot: getCssVar('--color-orange'),
				bar: getCssVar('--theme-highlight'),
			};

			const gap = 1 * dpr;
			const indicator = 5 * dpr;
			const barWidth = (canvas.width - (sortedItems.length - 1) * gap) / sortedItems.length;
			const maxBarHeight = canvas.height - indicator - gap;
			const minBarHeight = maxBarHeight / sortedItems.length;

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			ctx.fillStyle = colors.bar;
			ctx.fillRect(0, canvas.height - indicator, canvas.width, indicator);

			sortedItems.forEach((item, index) => {
				const barHeight = minBarHeight * item;
				const isPointer = pointers.includes(index);
				const isPivot = pivots.includes(index);

				if (isPointer || isPivot) {
					ctx.fillStyle = isPointer ? colors.pointer : colors.pivot;

					ctx.fillRect(
						index * barWidth + index * gap,
						canvas.height - indicator,
						barWidth,
						indicator
					);
				}

				if (operations.includes(index)) {
					ctx.fillStyle = colors.operation;
				} else if (comparisions.includes(index)) {
					ctx.fillStyle = colors.comparision;
				} else if (sorted.includes(index)) {
					ctx.fillStyle = colors.sorted;
				} else {
					ctx.fillStyle = colors.unsorted;
				}

				ctx.fillRect(
					index * barWidth + index * gap,
					canvas.height - barHeight - indicator - gap,
					barWidth,
					barHeight
				);
			});
		});
	}

	function update() {
		operations = [];

		const { done } = sorter.next();

		draw();

		if (done) {
			comparisions = [];
			pointers = [];
			pivots = [];
			state = State.Done;
		}

		if (state === State.Running) {
			intervalId = setTimeout(update, speed);
		}
	}

	function reset() {
		state = State.Idle;
		comparisonsCount = 0;
		operationsCount = 0;
		iterationsCount = 0;
		sorted = [];
		comparisions = [];
		pointers = [];
		operations = [];
		pivots = [];

		sortedItems = [...items];

		sorter = sort(sortedItems, {
			onComparison: (...indicies) => {
				comparisonsCount++;
				comparisions = indicies;
			},
			onOperation: (...indicies) => {
				operationsCount++;
				operations = indicies;
			},
			onPivot: (...indicies) => {
				pivots = indicies;
			},
			onPointer: (...indicies) => {
				iterationsCount++;
				pointers = indicies;
			},
			onSorted: (...indicies) => {
				sorted = [...sorted, ...indicies];
			},
		});

		draw();
	}

	function start() {
		state = State.Running;

		update();

		track('click', { category: name, label: 'start' });
	}

	function next() {
		state = State.Paused;

		update();

		track('click', { category: name, label: 'next' });
	}

	function pause() {
		state = State.Paused;

		clearInterval(intervalId);

		track('click', { category: name, label: 'pause' });
	}

	onMount(() => {
		const rect = canvas.getBoundingClientRect();

		dpr = window.devicePixelRatio || 1;

		canvas.width = rect.width * dpr;
		canvas.height = rect.height * dpr;

		reset();

		const unsubscribe = isDarkMode.subscribe(draw);

		return () => {
			state = State.Idle;
			window.clearTimeout(intervalId);
			window.cancelAnimationFrame(frameId);
			unsubscribe();
		};
	});
</script>

<svelte:window on:resize={draw} />

<section>
	<header>
		<h2>{name}</h2>
		<Button
			aria-label={running ? 'Pause' : 'Start'}
			disabled={complete}
			inverted
			on:click={running ? pause : start}
			square
		>
			{#if running}
				<Pause />
			{:else}
				<Start />
			{/if}
		</Button>
		<Button aria-label="Next" disabled={complete || running} inverted on:click={next} square>
			<Next />
		</Button>
		<Button
			aria-label="Reset"
			disabled={!complete && !paused}
			inverted
			on:click={() => {
				track('click', { category: name, label: 'reset' });
				reset();
			}}
			square
		>
			<Reset />
		</Button>
	</header>
	<canvas class="canvas" bind:this={canvas} width="1800" height="900" />
	<footer>
		<ul class="details">
			<li>
				Iterations: <strong>{iterationsCount}</strong>
			</li>
			<li>
				Operations: <strong>{operationsCount}</strong>
			</li>
			<li>
				Comparisons: <strong>{comparisonsCount}</strong>
			</li>
		</ul>
	</footer>
</section>

<style>
	canvas {
		display: block;
		width: 100%;
	}

	section {
		background-color: var(--theme-background-secondary);
		border-radius: var(--space-xxs);
		display: grid;
		gap: var(--space-s);
		padding: var(--space-m);
	}

	header {
		align-items: center;
		display: grid;
		gap: var(--space-xs);
		grid-template-columns: 1fr auto auto auto;
	}

	footer {
		font-size: var(--text-xs);
	}

	.details {
		display: grid;
		gap: var(--space-xxs) var(--space-l);
		grid-template-columns: 1fr 1fr;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.details li {
		display: grid;
		gap: var(--space-xxs);
		grid-template-columns: 1fr auto;
	}

	h2 {
		font-weight: 700;
		margin: 0;
	}
</style>
