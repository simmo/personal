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
	import PostLink from '$lib/components/PostLink.svelte';
	import type { Post } from '$lib/types';
	import TwoColumnGrid from '$lib/components/TwoColumnGrid.svelte';

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
		sites and products. My pronouns are <Link href="https://pronoun.is/he/him">he/him</Link>.
	</p>

	<section class="main">
		<h2>Recent projects</h2>
		<TwoColumnGrid>
			{#each projects as { slug: href, heading, description }}
				<PostLink {href} {heading} {description} />
			{/each}
		</TwoColumnGrid>
	</section>
</Page>

<style>
	section {
		display: grid;
		row-gap: var(--space-s);
	}

	h2 {
		color: var(--color-blue);
		font-size: var(--text-m);
		font-weight: 500;
		text-transform: uppercase;
	}
</style>
