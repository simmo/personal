<script lang="ts">
	import { random } from '$lib/utils/maths';
	import { getContext } from 'svelte';
	import Bit from './Bit.svelte';

	export let x: number;
	export let size: number;

	const { height } = getContext('canvas');

	const totalChars = 10 + Math.floor(random(height / size - 10));
	const y = Math.round(random(height - size));
	const speed = 2 + Math.round(random(3));

	let bits = Array.from({ length: totalChars }, (_, index) => index);
</script>

{#each bits as bit}
	<Bit
		first={bit === 0}
		opacity={bit > totalChars - 8 ? (totalChars - bit) / 8 : 1}
		{x}
		y={y - size * bit}
		{size}
		{speed}
	/>
{/each}
