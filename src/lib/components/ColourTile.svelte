<script lang="ts">
	import type { Hex, HSL, RGB } from '$lib/utils/colours';

	export let colour: Hex | HSL | RGB;
	export let compact: boolean = false;
</script>

<div class="background">
	<div class="colour" class:compact style={`background-color: ${colour}`}>
		<span class="info">{colour}</span>
	</div>
</div>

<style>
	.background {
		background-color: #fff;
		background-image: linear-gradient(
				45deg,
				#ccc 25%,
				transparent 25%,
				transparent 75%,
				#ccc 75%,
				#ccc
			),
			linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc);
		background-position: 0 0, 30px 30px;
		background-size: 60px 60px;
		display: grid;
	}

	.colour {
		align-content: center;
		display: grid;
		justify-content: center;
	}

	.info {
		background-color: rgba(0, 0, 0, 0.4);
		border-radius: var(--space-xxs);
		color: #fff;
		font-size: var(--text-xs);
		font-weight: 500;
		padding: var(--space-xxs) var(--space-xs);
		font-variant-numeric: tabular-nums;
	}

	.colour.compact .info {
		display: none;
	}

	.colour.compact:hover .info {
		display: block;
	}
</style>
