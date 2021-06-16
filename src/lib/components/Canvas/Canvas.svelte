<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import type { DrawFn } from './types';

	export let autoClear: boolean = true;
	export let height: number = 100;
	export let showFPS: boolean = false;
	export let width: number = 100;
	export let alpha: boolean = true;

	let canvas: HTMLCanvasElement;

	const layers: DrawFn[] = [];

	setContext('canvas', {
		height,
		width,
		register(callback: DrawFn) {
			layers.push(callback);

			return () => {
				layers.splice(layers.indexOf(callback));
			};
		},
	});

	onMount(() => {
		const ctx = canvas.getContext('2d', { alpha });

		if (!ctx) {
			return;
		}

		const dpr = window.devicePixelRatio || 1;

		canvas.width = canvas.width * dpr;
		canvas.height = canvas.height * dpr;

		// Set scale
		ctx.scale(dpr, dpr);

		let rafId: number;
		let fps: string = '0';
		let lastTime = Date.now();

		const draw = () => {
			rafId = window.requestAnimationFrame((time) => {
				fps = (1000 / (time - lastTime)).toFixed(2);
				lastTime = time;

				// Reset canvas
				if (autoClear) {
					ctx.clearRect(0, 0, canvas.width, canvas.height);
				}

				// Draw each layer
				layers.forEach((callback) => {
					callback({ ctx, height, width });
				});

				if (showFPS) {
					ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
					ctx.fillRect(0, height - 75, width, 75);
					ctx.font = 'bold 30px monospace';
					ctx.textAlign = 'left';
					ctx.fillStyle = '#fff';
					ctx.fillText(`FPS: ${fps}`, 20, height - 30);
				}

				// Call next draw tick
				draw();
			});
		};

		draw();

		return () => {
			window.cancelAnimationFrame(rafId);
		};
	});
</script>

<canvas bind:this={canvas} {height} {width}>
	<p>You'll need JavaScript enabled to run this 🧑‍💻.</p>
</canvas>

<slot />

<style>
	canvas {
		display: block;
		width: 100%;
	}

	canvas p {
		padding: var(--space-s);
	}
</style>
