<script lang="ts">
	import { userPreference } from '$lib/store/darkMode';
	import Logo from './Logo.svelte';
	import Select from './Select.svelte';
</script>

<header class="grid full">
	<div class="main inner">
		<div class="home">
			<Logo size={30} />
			<a class="name" href="/">Mike Simmonds</a>
		</div>
		<nav>
			<ul>
				<li><a href="/blog">Posts</a></li>
			</ul>
		</nav>
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

	.home {
		align-content: center;
		align-items: center;
		display: grid;
		gap: var(--space-xs);
		grid-area: home;
		grid-template-columns: auto 1fr;
	}

	.inner {
		align-content: center;
		align-items: center;
		display: grid;
		gap: var(--space-xs);
		grid-template-columns: 1fr auto;
		grid-template-areas: 'home home' 'nav theme';
	}

	@media screen and (min-width: 30rem) {
		.inner {
			gap: var(--space-s);
			grid-template-columns: auto 1fr auto;
			grid-template-areas: 'home nav theme';
		}

		nav {
			margin-left: var(--space-xs);
		}
	}

	nav {
		grid-area: nav;
	}

	nav ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	nav li {
	}

	nav a {
		color: inherit;
	}

	nav a:hover {
		color: var(--theme-accent);
	}

	.name {
		color: inherit;
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
