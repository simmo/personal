<script lang="ts">
	import { Canvas, Layer } from '$lib/components/Canvas';
	import type { DrawFn } from '$lib/components/Canvas';
	import type { Config } from '$lib/components/Canvas';
	import Stream from '$lib/projects/matrix/Stream.svelte';
	import getCssVar from '$lib/utils/getCssVar';
	import { showFPS } from '$lib/projects/matrix/config';

	const canvasWidth = 1800;
	const totalStreams = 50;
	const size = Math.floor(canvasWidth / totalStreams);
	const streams = Array.from({ length: totalStreams }, (_, index) => size * index);

	const drawBackground: DrawFn = ({ ctx, height, width }: Config) => {
		ctx.fillStyle = getCssVar('--color-black');
		ctx.fillRect(0, 0, width, height);
	};
</script>

<Canvas height={900} width={canvasWidth} showFPS={$showFPS}>
	<Layer draw={drawBackground} />
	{#each streams as x}
		<Stream {x} {size} />
	{/each}
</Canvas>
