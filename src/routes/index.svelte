<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import type { Post } from '$lib/types';

	export const load: Load = async ({ page, fetch, session, context }) => {
		const url = `/blog.json`;
		const res = await fetch(url);
		const posts: Post[] = await res.json();

		if (res.ok) {
			return {
				props: {
					posts: posts.map((project) => ({
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
	import TwoColumnGrid from '$lib/components/TwoColumnGrid.svelte';
	import { differenceInCalendarYears } from 'date-fns';

	export let posts: Post[];

	const years = differenceInCalendarYears(new Date(), new Date('2009-03-01'));
</script>

<Page
	heading="Hello, I’m Mike."
	description="A UK based, front-end software engineer living in Sussex, working in London and remote."
>
	<p slot="intro">
		Currently working at <Link href="https://zonedigital.com">Zone/Cognizant</Link>. I’ve spent over {years}
		years working across the tech, marketing and publishing sectors to deliver high-end web apps, sites
		and products. My pronouns are <Link href="https://pronoun.is/he/him">he/him</Link>.
	</p>

	<section class="full grid">
		<h2>Recent posts</h2>
		<div class="offset">
			<TwoColumnGrid>
				{#each posts as { slug: href, heading, description, published }}
					<PostLink {href} {heading} {description} {published} />
				{/each}
			</TwoColumnGrid>
		</div>
	</section>
</Page>

<style>
	section {
		display: grid;
		row-gap: var(--space-s);
	}

	h2 {
		color: var(--color-blue);
		font-size: var(--text-l);
		font-weight: 500;
	}
</style>
