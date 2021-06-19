<script lang="ts" context="module">
	import type { PostMeta } from '$lib/types';

	export const meta: PostMeta = {
		title: 'Fireworks',
		heading: 'Fireworks',
		description: 'Rendering fireworks',
		isPublished: true,
		published: new Date('2021-07-23T09:00:00Z'),
	};
</script>

<script lang="ts">
	import Copy from '$lib/components/Copy.svelte';
	import Link from '$lib/components/Link.svelte';
	import Page from '$lib/components/Page.svelte';
	import Fireworks from '$lib/projects/fireworks/Fireworks.svelte';
</script>

<Page {meta}>
	<Fireworks />
</Page>
