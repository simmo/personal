---
title: Sorting Algorithms
heading: Sorting Algorithms
description: Using visualisation to explore different sorting algorithms.
og: {
	image: /preview/sort.jpg
}
isPublished: true
published: 2021-03-26T00:00:00Z
---

<script>
	import Controls from '$lib/projects/sort/components/Controls.svelte';
	import Graph from '$lib/projects/sort/components/Graph.svelte';
	import bubbleSort from '$lib/projects/sort/algorithms/bubbleSort';
	import cocktailSort from '$lib/projects/sort/algorithms/cocktailSort';
	import insertionSort from '$lib/projects/sort/algorithms/insertionSort';
	import oddEvenSort from '$lib/projects/sort/algorithms/oddEvenSort';
	import quickSort from '$lib/projects/sort/algorithms/quickSort';
	import selectionSort from '$lib/projects/sort/algorithms/selectionSort';
	import shuffle from '$lib/projects/sort/utils/shuffle';
	import TwoColumnGrid from '$lib/components/TwoColumnGrid.svelte';
</script>

This project is built with [Svelte](https://svelte.dev) and [TypeScript](https://www.typescriptlang.org). The sorting algorithms use nested [generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) to manage the execution of logic, capture algorithm output and visualise this via [HTML canvas](https://developer.mozilla.org/ms/docs/Web/API/Canvas_API).

<Controls />

<div class="main">
	<TwoColumnGrid>
		<Graph name="Bubble" sort={bubbleSort} />
		<Graph name="Cocktail" sort={cocktailSort} />
		<Graph name="Insertion" sort={insertionSort} />
		<Graph name="Odd-Even" sort={oddEvenSort} />
		<Graph name="Quick" sort={quickSort} />
		<Graph name="Selection" sort={selectionSort} />
	</TwoColumnGrid>
</div>
