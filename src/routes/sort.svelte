<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import Page from '$lib/components/Page.svelte';
	import Range from '$lib/components/Range.svelte';
	import { throttle } from '$lib/utils/timing';
	import track from '$lib/utils/track';
	import Graph from '$lib/projects/sort/components/Graph.svelte';
	import bubbleSort from '$lib/projects/sort/algorithms/bubbleSort';
	import cocktailSort from '$lib/projects/sort/algorithms/cocktailSort';
	import insertionSort from '$lib/projects/sort/algorithms/insertionSort';
	import oddEvenSort from '$lib/projects/sort/algorithms/oddEvenSort';
	import quickSort from '$lib/projects/sort/algorithms/quickSort';
	import selectionSort from '$lib/projects/sort/algorithms/selectionSort';
	import shuffle from '$lib/projects/sort/utils/shuffle';

	const enum Dataset {
		Random = 'RANDOM',
		Reversed = 'REVERSED',
	}

	let initialItems: number[] = Array.from({ length: 100 }, (_, x) => x + 1);
	let dataset: Dataset = Dataset.Random;
	let items = initialItems;

	$: {
		switch (dataset) {
			case Dataset.Reversed:
				items = [...initialItems].reverse();
				break;
			case Dataset.Random:
				items = shuffle(items);
				break;
		}
	}

	const fastest = 0;
	const slowest = 100;
	let speed = 0;

	const trackSpeed = throttle(() => {
		track('change', {
			category: 'sort',
			label: 'speed',
			value: speed,
		});
	}, 100);
</script>

<svelte:head>
	<meta property="og:image" content="https://mike.id/preview/sort.jpg" />
</svelte:head>

<Page
	pageTitle="Sorting Algorithms"
	heading="Sorting Algorithms"
	description="Using visualisation to explore different sorting algorithms."
>
	<p slot="intro">
		This project is built with <Link href="https://svelte.dev">Svelte</Link> and
		<Link href="https://www.typescriptlang.org">TypeScript</Link>. The sorting algorithms use nested
		<Link
			href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator"
		>
			generator functions
		</Link>
		to manage the execution of logic, capture algorithm output and visualise this via
		<Link href="https://developer.mozilla.org/ms/docs/Web/API/Canvas_API">HTML canvas</Link>.
	</p>

	<div class="controls">
		<p>Tip: Try adjusting this while the algorithms are running.</p>
		<p>
			<label for="speed"
				>Speed
				<small>Fast to Slow</small></label
			>
			<Range
				id="speed"
				min={fastest}
				max={slowest}
				step={10}
				bind:value={speed}
				on:input={trackSpeed}
			/>
		</p>
	</div>

	<div class="main graphs">
		<Graph {speed} name="Bubble" {items} sort={bubbleSort} />
		<Graph {speed} name="Cocktail" {items} sort={cocktailSort} />
		<Graph {speed} name="Insertion" {items} sort={insertionSort} />
		<Graph {speed} name="Odd-Even" {items} sort={oddEvenSort} />
		<Graph {speed} name="Quick" {items} sort={quickSort} />
		<Graph {speed} name="Selection" {items} sort={selectionSort} />
	</div>
</Page>

<style>
	.controls {
		border-bottom: 1px solid var(--theme-background-secondary);
		border-top: 1px solid var(--theme-background-secondary);
		display: grid;
		gap: var(--space-s);
		padding: var(--space-s) 0;
	}

	.graphs {
		display: grid;
		gap: var(--space-m);
		grid-template-columns: var(--grid-two-cols);
	}
</style>
