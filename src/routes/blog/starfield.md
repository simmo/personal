---
title: Starfield
heading: Starfield
description: Seen in countless films when spaceships enter 'warp'. The starfield was also made popular in Windows 3.1 as a screen saver!
ogImage: /preview/starfield.jpg
isPublished: true
published: 2021-06-01T08:00:21Z
---

<script>
	import Controls from '$lib/projects/starfield/Controls.svelte';	
	import Starfield from '$lib/projects/starfield/Starfield.svelte';	
</script>

This demo is rendered in 2D, but, using a little deception, we can give the appearance of 3D space.

<div class="wrapper full">
	<Starfield />
</div>

<Controls />

## Pride

June is Pride month! To celebrate, I've added a Pride mode! You can enable it by selecting the 'Show PRIDE' checkbox above. 🙌 🏳️‍🌈

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
