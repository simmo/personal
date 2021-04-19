<script lang="ts">
	import { Layer, tick } from '$lib/components/Canvas';
	import type { Config } from '$lib/components/Canvas/types';

	export let size: number;
	export let speed: number = 1;
	export let x: number;
	export let y: number;
	export let first: boolean = false;
	export let opacity: number = 1;
	export let blur: boolean = false;

	const generateCharacter = () => {
		const charType = Math.round(Math.random() * 1);

		if (charType === 0) {
			return String.fromCharCode(0x30a0 + Math.round(Math.random() * 96));
		}

		return Math.round(Math.random() * 9).toString();
	};

	let text = generateCharacter();

	$: {
		if ($tick % (5 + Math.round(Math.random() * 100)) === 0) {
			text = generateCharacter();
		}
	}

	$: draw = ({ ctx, height }: Config) => {
		const rb = first ? 200 : 0;
		const fillStyle = `rgba(${rb}, 255, ${rb}, ${opacity})`;

		if (blur) {
			ctx.shadowColor = fillStyle;
			ctx.shadowBlur = 20;
		}
		ctx.font = `${first ? 'bold ' : ''}${size}px monospace`;
		ctx.textAlign = 'center';
		ctx.fillStyle = fillStyle;
		ctx.fillText(text, x, y + size);

		y = y > height ? 0 - size : y + speed;
	};
</script>

<Layer {draw} />
