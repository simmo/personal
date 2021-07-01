<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Pause from '$lib/icons/Pause.svelte';
	import Reset from '$lib/icons/Reset.svelte';
	import Start from '$lib/icons/Start.svelte';
	import { state, State } from '$lib/projects/maze/config';
</script>

<div class="controls">
	<Button
		on:click={() => {
			$state = $state === State.Playing ? State.Paused : State.Playing;
		}}
		disabled={$state === State.Completed}
	>
		{#if $state === State.Playing}
			<Pause /> Pause
		{:else}
			<Start /> Play
		{/if}
	</Button>
	<Button
		on:click={() => {
			$state = State.Idle;
		}}
		disabled={$state === State.Playing || $state === State.Idle}
	>
		<Reset /> Reset
	</Button>
</div>

<style>
	.controls {
		align-items: start;
		justify-content: start;
		display: grid;
		column-gap: var(--space-s);
		grid-auto-flow: column;
	}
</style>
