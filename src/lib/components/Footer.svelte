<script lang="ts">
	import CodeSandbox from '$lib/icons/CodeSandbox.svelte';

	import GitHub from '$lib/icons/GitHub.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import Npm from '$lib/icons/Npm.svelte';
	import StackOverflow from '$lib/icons/StackOverflow.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
	import type { SvelteComponent } from 'svelte';
	import Link from './Link.svelte';

	const now = new Date();

	const socials: [icon: typeof SvelteComponent, url: string, name: string][] = [
		[LinkedIn, 'http://lnkd.in/2T4KbK', 'LinkedIn'],
		[GitHub, 'http://github.com/simmo', 'GitHub'],
		[Npm, 'https://npmjs.com/~simmo', 'NPM'],
		[StackOverflow, 'http://stackoverflow.com/users/547345/mike', 'StackOverflow'],
		[Twitter, 'http://twitter.com/mikesimmonds', 'Twitter'],
		[CodeSandbox, 'https://codesandbox.io/u/simmo', 'CodeSandbox'],
	];
</script>

<footer class="main">
	<p>&copy; {now.getFullYear()} Mike Simmonds</p>
	<ul>
		{#each socials as [icon, href, name]}
			<li>
				<Link {href}><svelte:component this={icon} /> {name}</Link>
			</li>
		{/each}
	</ul>
</footer>

<style>
	footer {
		border-top: 1px solid var(--theme-background-secondary);
		color: var(--theme-text-secondary);
		display: grid;
		font-size: var(--text-xs);
		padding-top: var(--space-m);
		padding-bottom: max(var(--space-m), env(safe-area-inset-bottom));
	}

	ul {
		display: grid;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	@media screen and (min-width: 30rem) {
		ul {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media screen and (min-width: 60rem) {
		footer {
			grid-template-columns: 2fr 1fr;
		}
	}
</style>
