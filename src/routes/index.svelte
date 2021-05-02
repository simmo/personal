<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import Page from '$lib/components/Page.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import Npm from '$lib/icons/Npm.svelte';
	import StackOverflow from '$lib/icons/StackOverflow.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
</script>

<Page
	heading="Hello, I’m Mike."
	description="A UK based, Lead frontend engineer living in Sussex, working in London and remote."
>
	<p slot="intro">
		Currently <Link href="https://zonedigital.com">@Zone</Link>. I’ve spent over 10 years working
		across marketing and publishing sectors to deliver high-end web apps, sites and products.
	</p>

	<section>
		<h2>Projects</h2>
		<div class="projects">
			<article>
				<a href="/maze">
					<h3>Maze Generation</h3>
					<p>Exploring the use of a recursive backtracker algorithm to generate a Maze.</p>
				</a>
			</article>
			<article>
				<a href="/matrix">
					<h3>Matrix</h3>
					<p>Using canvas to recreate the iconic falling code, as seen in the Matrix films.</p>
				</a>
			</article>
			<article>
				<a href="/sort">
					<h3>Sort</h3>
					<p>Using visualisation to explore different sorting algorithms.</p>
				</a>
			</article>
			<article>
				<a href="https://snake.simmo.codes">
					<h3>Snake</h3>
					<p>A fun project to build a Snake game with CSS grid and a little bit of TypeScript.</p>
				</a>
			</article>
			<article>
				<a href="/gulp-stats">
					<h3>Gulp Stats</h3>
					<p>A Gulp plugin to display summary of the tasks run.</p>
				</a>
			</article>
		</div>
	</section>

	<section>
		<h2>Socials</h2>
		<ul class="socials">
			<li>
				<Link href="http://lnkd.in/2T4KbK"><LinkedIn /> LinkedIn</Link>
			</li>
			<li>
				<Link href="http://github.com/simmo"><GitHub /> GitHub</Link>
			</li>
			<li>
				<Link href="https://npmjs.com/~simmo"><Npm /> NPM</Link>
			</li>
			<li>
				<Link href="http://stackoverflow.com/users/547345/mike">
					<StackOverflow /> StackOverflow
				</Link>
			</li>
			<li>
				<Link href="http://twitter.com/mikesimmonds"><Twitter /> Twitter</Link>
			</li>
		</ul>
	</section>
</Page>

<style>
	section {
		display: grid;
		row-gap: var(--space-s);
	}

	.projects {
		display: grid;
		gap: var(--space-m);
		grid-template-columns: var(--grid-two-cols);
	}

	article {
		display: grid;
	}

	article > a {
		background-color: var(--theme-background-secondary);
		border-radius: var(--space-xxs);
		color: inherit;
		display: block;
		padding: var(--space-m);
	}

	.socials {
		justify-content: start;
		display: grid;
		row-gap: var(--space-xs);
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.socials :global(a) {
		align-items: center;
		display: grid;
		column-gap: var(--space-xs);
		grid-template-columns: auto 1fr;
	}

	.socials :global(svg) {
		font-size: var(--text-m);
	}
</style>
