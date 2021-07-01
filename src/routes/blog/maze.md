---
title: Maze Generation
heading: Maze Generation
description: Exploring the use of a recursive backtracker algorithm to generate a Maze.
og: {
	image: /preview/maze.jpg
}
isPublished: true
published: 2021-05-02T18:00:00Z
---

<script>
	import ColourSquare from '$lib/components/ColourSquare.svelte';
	import Maze from '$lib/projects/maze/Maze.svelte';
	import Controls from '$lib/projects/maze/Controls.svelte';
</script>

<p slot="intro">
	I'm not sure why or if I'll ever need to create a maze as part of a project but it does make for an interesting code challenge!
</p>

<Maze />

<Controls />

## Research

This Wikipedia article on [maze generation algorithms](https://en.wikipedia.org/wiki/Maze_generation_algorithm) was a great help.

>     	1. Choose the initial cell, mark it as visited and push it to the stack
>     	1. While the stack is not empty
>     		1. Pop a cell from the stack and make it a current cell
>     		1. If the current cell has any neighbours which have not been visited
>     			1. Push the current cell to the stack
>     			1. Choose one of the unvisited neighbours
>     			1. Remove the wall between the current cell and the chosen cell
>     			1. Mark the chosen cell as visited and push it to the stack

## Implementation

Note: The current cell is shown in <ColourSquare value="--color-green">green</ColourSquare> with the cells in the stack shown in <ColourSquare value="--theme-highlight">grey</ColourSquare>.

When the algorithm is backtracking, the cell is shown in <ColourSquare value="--color-pink">pink</ColourSquare>.

### Stack

One important feature of this algorithm is the use of a stack.

You can think of a stack like a pile of plates ready to be washed up - as you are given a plate you place it down on top of the previous, this is known as a 'push'. When you go to wash one up you take it from the top of the pile, known as a 'pop'. This is a last-in, first-out system.

In JavaScript/TypeScript, we can use an array for this structure. It helpfully has the methods `push` and `pop` that can be used exactly as needed.

### The loop

When we visit a cell, we push it into the stack. We look at the neighbouring cells, that have not yet been visited, picking one at random, this becomes the next cell. We remove the wall between the current and the next. The next becomes our current cell. Repeat.

However, there comes a time when the current cell has no unvisited neighbours, we have no next cell to go to - we've reached a dead-end. This is where backtracking and the stack come into play.

We 'pop' an item from the stack and see if it has any unvisited neighbours. If it does, make this the current and carry on. If not, keep popping from the stack, checking for unvisited neighbours, until our stack becomes empty.

When the stack is empty we're done!
