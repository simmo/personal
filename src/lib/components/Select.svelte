<script lang="ts">
	import Down from '$lib/icons/Down.svelte';

	export let id: string;
	export let value: unknown;
</script>

<div>
	<select bind:value {id}>
		<slot />
	</select>
	<span><Down /></span>
</div>

<style>
	div {
		align-items: center;
		display: inline-grid;
		grid-template-areas: 'input';
		vertical-align: middle;
	}

	select {
		appearance: none;
		background-color: var(--theme-background-secondary);
		border: 0;
		border-radius: var(--space-xxs);
		box-shadow: 0 0 0 0 transparent inset;
		color: inherit;
		cursor: pointer;
		font: inherit;
		grid-area: input;
		line-height: inherit;
		margin: 0;
		padding: var(--space-xxs) var(--space-m) var(--space-xxs) var(--space-xs);
		transition-duration: 0.3s;
		transition-property: box-shadow;
		width: 100%;
	}

	select::-ms-expand {
		display: none;
	}

	select:hover,
	select:focus {
		box-shadow: 0 0 0 2px var(--theme-accent) inset;
		outline: none;
	}

	span {
		align-items: center;
		display: grid;
		font-size: var(--space-s);
		grid-area: input;
		justify-content: center;
		justify-self: end;
		pointer-events: none;
		width: var(--space-m);
	}
</style>
