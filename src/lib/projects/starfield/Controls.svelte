<script lang="ts">
	import Checkbox from '$lib/components/Checkbox.svelte';
	import Range from '$lib/components/Range.svelte';
	import { showFPS, speed, withPride } from '$lib/projects/starfield/config';
</script>

<div class="controls">
	<div>
		<label for="speed">Speed</label>
		<Range id="speed" min={2} max={40} step={0.5} bind:value={$speed} />
	</div>
	<Checkbox bind:checked={$showFPS}>Show FPS</Checkbox>
	<Checkbox bind:checked={$withPride} hint="Happy Pride Month!">Show PRIDE</Checkbox>
</div>

<style>
	.controls {
		display: grid;
		gap: var(--space-s);
	}

	@media screen and (min-width: 30rem) {
		.controls {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
