<script lang="ts">
	import Checkbox from '$lib/components/Checkbox.svelte';
	import { blur, showFPS } from './config';
</script>

<div class="controls">
	<Checkbox bind:checked={$showFPS}>Show FPS</Checkbox>
	<Checkbox bind:checked={$blur} hint="May not perform well in some browsers!">Use shadow</Checkbox>
</div>

<style>
	.controls {
		display: grid;
		column-gap: var(--space-s);
	}
</style>
