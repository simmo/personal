<script lang="ts" context="module">
	import { slugFromPath } from '$lib/utils/slugFromPath';

	import type { Load } from '@sveltejs/kit';

	const projects = Object.keys(import.meta.glob('./projects/*.svelte')).map(slugFromPath);

	export const load: Load = async ({ page }) => {
		const url = `/projects/${page.params.slug}`;
		const projectExists = projects.includes(url);

		if (projectExists) {
			return {
				status: 301,
				redirect: url,
			};
		}

		return {
			status: 404,
			error: new Error(`Page not found`),
		};
	};
</script>
