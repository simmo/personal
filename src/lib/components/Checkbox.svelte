<script lang="ts">
	import Check from '$lib/icons/Check.svelte';

	export let checked: boolean = false;
	export let hint: undefined | string = undefined;
</script>

<label>
	<input type="checkbox" bind:checked on:change />
	<span class="outer" class:checked><Check /></span>
	<span>
		<slot />
		{#if hint}
			<span class="hint">{hint}</span>
		{/if}
	</span>
</label>

<style>
	label {
		align-items: start;
		display: inline-grid;
		column-gap: var(--space-xs);
		cursor: pointer;
		grid-template-columns: auto 1fr;
	}

	input {
		appearance: none;
		height: 1px;
		padding: 0;
		margin: 0;
		position: absolute;
		width: 1px;
		visibility: hidden;
	}

	.outer {
		align-items: center;
		background-color: var(--theme-background-secondary);
		border-radius: var(--space-xxs);
		display: grid;
		height: var(--space-m);
		justify-content: center;
		padding: var(--space-xxs);
		transition-duration: 0.3s;
		transition-property: box-shadow;
		width: var(--space-m);
	}

	input:focus + .outer,
	input:hover + .outer {
		box-shadow: 0 0 0 2px var(--theme-accent) inset;
	}

	.outer > :global(svg) {
		opacity: 0;
		transform: scale(0);
		transition-duration: 0.2s;
		transition-property: opacity, transform;
	}

	.checked > :global(svg) {
		opacity: 1;
		transform: scale(1);
	}

	.hint {
		color: var(--theme-text-secondary);
		display: block;
		font-size: var(--text-xs);
	}
</style>
