<script lang="ts" context="module">
	import type { PostMeta } from '$lib/types';

	export const meta: PostMeta = {
		title: 'Gulp Stats',
		heading: 'Gulp Stats',
		description: 'Gulp 4 plugin that displays a task summary.',
		isPublished: true,
		published: new Date('2015-01-28T09:37:08Z'),
	};
</script>

<script lang="ts">
	import Copy from '$lib/components/Copy.svelte';
	import Link from '$lib/components/Link.svelte';
	import Page from '$lib/components/Page.svelte';
</script>

<Page {meta}>
	<div class="badges" slot="intro">
		<img
			alt="Latest version badge"
			src="https://img.shields.io/npm/v/gulp-stats?style=flat-square"
		/>
		<img
			alt="Downloads count badge"
			src="https://img.shields.io/npm/dw/gulp-stats?style=flat-square"
		/>
	</div>

	<Copy>
		<p>
			Out of the box Gulp gives you very little feedback when tasks are run. This plugin aims to
			fill that gap, giving a breakdown of the tasks run and the time taken.
		</p>
		<p>The report can also be customised.</p>
		<p>
			<Link href="https://www.npmjs.com/package/gulp-stats">Take a look at the README</Link> for more
			information.
		</p>
	</Copy>
</Page>

<style>
	.badges {
		align-items: center;
		display: grid;
		gap: var(--space-xs);
		grid-auto-flow: column;
		justify-content: start;
	}
</style>
