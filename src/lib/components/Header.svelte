<script lang="ts">
	import { userPreference } from '$lib/store/darkMode';
	import Logo from './Logo.svelte';
	import Select from './Select.svelte';
</script>

<header class="grid full">
	<div class="main inner">
		<Logo size={30} />
		<a href="/">Mike Simmonds</a>
		<!-- <nav>
		<ul>
			<li><a href="/projects">Projects</a></li>
		</ul>
	</nav> -->
		<div class="theme">
			<label for="pref">Theme: </label><Select bind:value={$userPreference} id="pref">
				<option value={null}>System</option>
				<option value={true}>Dark</option>
				<option value={false}>Light</option>
			</Select>
		</div>
	</div>
</header>

<style>
	header {
		background-color: var(--theme-background-primary);
		box-shadow: 0 1px var(--space-xs) var(--theme-shadow);
		padding: var(--space-s) 0;
		position: sticky;
		top: 0;
		z-index: 1;
	}

	.inner {
		align-content: center;
		align-items: center;
		display: grid;
		gap: var(--space-xs);
		grid-template-columns: auto auto 1fr auto;
		grid-template-areas: 'icon link nav theme';
	}

	nav {
		grid-area: nav;
		padding: 0 var(--space-m);
	}

	nav ul {
		list-style: none;
		padding: 0;
	}

	a {
		color: inherit;
		grid-area: link;
		line-height: 1;
		font-weight: bold;
		text-transform: uppercase;
	}

	.theme {
		align-items: center;
		display: grid;
		gap: var(--space-xs);
		grid-area: theme;
		grid-template-columns: auto auto;
	}

	label {
		margin: 0;
	}
</style>
