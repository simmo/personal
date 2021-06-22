---
title: Matrix digital rain
heading: Matrix digital rain
description: Using canvas to recreate the iconic raining code, as seen in the Matrix films.
ogImage: /preview/matrix.jpg
isPublished: true
published: 2021-04-19T08:06:50Z
---

<script>
	import Controls from '$lib/projects/matrix/Controls.svelte';
	import Matrix from '$lib/projects/matrix/Matrix.svelte';
</script>

<div class="full wrapper">
	<Matrix />
</div>

<Controls />

## Research

After a little searching, it appeared [Katakana](<https://en.wikipedia.org/wiki/Katakana_(Unicode_block)>) characters mixed with some single digit numbers closely matched the characters used in the film.

The Katakana characters start in unicode from `U+30a0` for 96 characters.

## Performance

On my MacBook Pro, the 50 columns of characters render at a steady 60fps. When I tried kicking it up to 100 columns, things got a little jumpy, dropping to about 20fps. I'm wondering if some sort of quad-tree type structure could be used to reduce the number of operations/renders needed.

<style>
	.wrapper {
		background-color: var(--color-black);
		position: relative;
	}

	.wrapper::after {
		bottom: 0;
		box-shadow: 0 0 var(--space-s) var(--space-xxs) var(--color-black) inset;
		content: '';
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
	}
</style>
