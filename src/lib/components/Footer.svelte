<script lang="ts">
	import CodeSandbox from '$lib/icons/CodeSandbox.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import Npm from '$lib/icons/Npm.svelte';
	import StackOverflow from '$lib/icons/StackOverflow.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
	import type { SvelteComponent } from 'svelte';
	import Link from './Link.svelte';

	const currentYear = new Date().getFullYear();

	const socials: [icon: typeof SvelteComponent, url: string, name: string][] = [
		[LinkedIn, 'http://lnkd.in/2T4KbK', 'LinkedIn'],
		[GitHub, 'http://github.com/simmo', 'GitHub'],
		[Npm, 'https://npmjs.com/~simmo', 'NPM'],
		[StackOverflow, 'http://stackoverflow.com/users/547345/mike', 'StackOverflow'],
		[Twitter, 'http://twitter.com/mikesimmonds', 'Twitter'],
		[CodeSandbox, 'https://codesandbox.io/u/simmo', 'CodeSandbox'],
	];
</script>

<footer class="grid">
	<div class="main inner">
		<p>&copy; {currentYear} Mike Simmonds</p>
		<ul>
			{#each socials as [icon, href, name]}
				<li>
					<Link {href}><svelte:component this={icon} slot="icon" /> {name}</Link>
				</li>
			{/each}
		</ul>
	</div>
</footer>

<style>
	.inner {
		border-top: 1px solid var(--theme-background-secondary);
		color: var(--theme-text-secondary);
		display: grid;
		gap: var(--space-s);
		grid-template-areas: 'socials' 'copyright';
		font-size: var(--text-xs);
		padding-top: var(--space-m);
		padding-bottom: max(var(--space-m), env(safe-area-inset-bottom));
	}

	p {
		grid-area: copyright;
	}

	ul {
		display: grid;
		gap: var(--space-xxs) var(--space-l);
		grid-area: socials;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	@media screen and (min-width: 30rem) {
		ul {
			grid-template-columns: auto auto;
			justify-content: start;
		}
	}

	@media screen and (min-width: 60rem) {
		.inner {
			grid-template-areas: 'copyright socials';
			grid-template-columns: 2fr 1fr;
		}
	}
</style>
