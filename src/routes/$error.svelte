<script context="module" lang="ts">
	import type { ErrorLoad } from '@sveltejs/kit';

	export const load: ErrorLoad = ({ error, status }) => ({
		props: {
			heading: `Error ${status}`,
			description: error.message,
		},
	});
</script>

<script lang="ts">
	import Page from '$lib/components/Page.svelte';
	import Link from '$lib/components/Link.svelte';

	export let heading: string;
	export let description: string;
</script>

<Page pageTitle={heading} {heading} {description}>
	<p slot="intro">
		Sorry, something went wrong, try heading back to <Link href="/">the home page</Link>.
	</p>
</Page>
