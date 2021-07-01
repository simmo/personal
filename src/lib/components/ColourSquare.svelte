<script lang="ts">
	import getCssVar from '$lib/utils/getCssVar';

	export let value: string;

	let color: string | undefined = value.startsWith('--') ? getCssVar(value) : value;
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
		align-items: baseline;
		display: inline-grid;
		gap: var(--space-xs);
		grid-template-columns: auto 1fr;
		font-weight: 500;
	}

	.inner {
		align-self: center;
		box-shadow: 0 0 0 1px var(--theme-text-primary), 0 0 0 2px var(--theme-background-primary) inset;
		border-radius: 2px;
		height: 1em;
		width: 1em;
	}
</style>
