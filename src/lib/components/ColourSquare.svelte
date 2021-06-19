<script lang="ts">
	import getCssVar from '$lib/utils/getCssVar';

	export let value: string;

	let color: string | undefined = value;

	if (value.startsWith('--')) {
		color = getCssVar(value);
	}
</script>

{#if color}
	<span class="outer">
		<span class="inner" style={`background-color: ${color}`} />
		<slot />
	</span>
{:else}
	<slot />
{/if}

<style>
	.outer {
		display: inline-block;
		font-weight: 500;
	}

	.inner {
		border-radius: var(--space-xxs);
		display: inline-block;
		height: 1em;
		margin-right: -0.2rem;
		vertical-align: middle;
		width: 1em;
	}
</style>
