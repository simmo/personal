<script lang="ts">
	import { mapToRange } from '$lib/utils/mapToRange';

	import type { DrawFn } from './Canvas';
	import { Canvas, Layer, tick } from './Canvas';
	import InlineDemo from './InlineDemo.svelte';

	const canvasWidth = 1800;
	const canvasHeight = 900;

	const max = Math.min(canvasWidth, canvasHeight) / 3;
	const min = max * 0.5;

	let angle = 0;

	const update = () => {
		angle += 0.012;
	};

	$: $tick && update();
	$: sine = Math.sin(angle);
	$: size = mapToRange(sine, -1, 1, min, max);
	$: hue = mapToRange(sine, -1, 1, 90, 180);
	$: offset = mapToRange(sine, -1, 1, 0, -10);

	let previousSine = 0;

	const draw: DrawFn = ({ ctx, height, width }) => {
		const total = 8;
		const increase = (Math.PI * 2) / total;
		let circleAngle = 0;

		for (let index = 0; index < total; index++) {
			ctx.beginPath();
			ctx.fillStyle = `hsla(${hue}, 100%, 40%, 0.2)`;
			ctx.arc(
				width / 2 + Math.cos(circleAngle) * 100 + Math.cos(circleAngle) * offset,
				height / 2 + Math.sin(circleAngle) * 100 + Math.sin(circleAngle) * offset,
				size,
				0,
				2 * Math.PI
			);
			ctx.fill();
			ctx.closePath();

			circleAngle += increase;
		}

		previousSine = sine;
	};
</script>

<InlineDemo
	title="Breathe"
	description="As the circles expand, breathe in through your nose and as they shrink, breathe out through your mouth."
>
	<Canvas height={canvasHeight} width={canvasWidth}>
		<Layer {draw} />
	</Canvas>
</InlineDemo>
