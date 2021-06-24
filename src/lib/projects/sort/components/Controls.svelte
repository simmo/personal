<script lang="ts">
	import Range from '$lib/components/Range.svelte';
	import { speed } from '$lib/projects/sort/config';

	const fastest = 0;
	const slowest = 100;
</script>

<div class="controls">
	<p>Tip: Try adjusting this while the algorithms are running.</p>
	<p>
		<label for="speed"
			>Speed
			<small>Fast to Slow</small></label
		>
		<Range id="speed" min={fastest} max={slowest} step={10} bind:value={$speed} />
	</p>
</div>

<style>
	.controls {
		border-bottom: 1px solid var(--theme-background-secondary);
		border-top: 1px solid var(--theme-background-secondary);
		display: grid;
		gap: var(--space-s);
		padding: var(--space-s) 0;
	}
</style>
