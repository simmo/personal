<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ page, fetch, session, context }) => {
		const url = `/projects.json`;
		const res = await fetch(url);
		const projects = await res.json();

		if (res.ok) {
			return {
				props: {
					projects: projects.map((project) => ({
						...project,
						published: new Date(project.published),
					})),
				},
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`),
		};
	};
</script>

<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import Page from '$lib/components/Page.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import Npm from '$lib/icons/Npm.svelte';
	import StackOverflow from '$lib/icons/StackOverflow.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
	import type { Post } from '$lib/types';

	export let projects: Post[];
</script>

<Page
	meta={{
		heading: 'Hello, I’m Mike.',
		description:
			'A UK based, Lead frontend engineer living in Sussex, working in London and remote.',
	}}
>
	<p slot="intro">
		Currently working at <Link href="https://zonedigital.com">Zone/Cognizant</Link>. I’ve spent over
		10 years working across the tech, marketing and publishing sectors to deliver high-end web apps,
		sites and products. My pronnouns are <Link href="https://pronoun.is/he/him">he/him</Link>.
	</p>

	<section>
		<h2>Projects</h2>
		<div class="projects">
			{#each projects as { slug: href, heading, description, published }}
				<article>
					<a {href}>
						<h3>{heading}</h3>
						<p>{description}</p>
					</a>
				</article>
			{/each}
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
