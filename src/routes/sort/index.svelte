<script lang="ts">
	import Page from '$lib/components/Page.svelte';
	import Range from '$lib/components/Range.svelte';
	import debounce from '$lib/utils/debounce';
	import track from '$lib/utils/track';
	import Graph from './_project/components/Graph.svelte';
	import bubbleSort from './_project/sorters/bubbleSort';
	import cocktailSort from './_project/sorters/cocktailSort';
	import insertionSort from './_project/sorters/insertionSort';
	import oddEvenSort from './_project/sorters/oddEvenSort';
	import quickSort from './_project/sorters/quickSort';
	import selectionSort from './_project/sorters/selectionSort';
	import shuffle from './_project/utils/shuffle';

	const enum Dataset {
		Random = 'RANDOM',
		Reversed = 'REVERSED',
	}

	let initialItems: number[] = Array.from({ length: 50 }, (_, x) => x + 1);
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

	const trackSpeed = debounce(() => {
		track('change', {
			category: 'app',
			label: 'speed',
			value: speed,
		});
	}, 100);
</script>

<Page
	pageTitle={['Sorting']}
	heading="Sorting Algorithms"
	description="Using visualisation to explore different sorting algorithms."
>
	<p slot="intro">
		This project is built with <a href="https://svelte.dev">Svelte</a> and
		<a href="https://www.typescriptlang.org">TypeScript</a>. The sorting algorithms use nested
		<a
			href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator"
			>generator functions</a
		>
		to manage the execution of logic, capture algorithm output and visualise this via
		<a href="https://developer.mozilla.org/ms/docs/Web/API/Canvas_API">HTML canvas</a>.
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

	<div class="graphs">
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
		gap: var(--space-l);
		grid-template-columns: var(--grid-two-cols);
	}
</style>
