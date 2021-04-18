<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type { CanvasContext, DrawFn } from './types';

	export let draw: DrawFn;

	const canvas = getContext<CanvasContext>('canvas');

	onMount(() => canvas.register(draw));
</script>
