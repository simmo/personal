import type { Post } from '$lib/types';
import { slugFromPath } from '$lib/utils/slugFromPath';
import type { RequestHandler } from '@sveltejs/kit';

type File = { meta: Omit<Post, 'slug'> };

export const get: RequestHandler = async () => {
	const modules = import.meta.glob('./*.svelte');

	const promises: Promise<null | Post>[] = Object.entries(modules).map(([path, resolver]) =>
		resolver().then(({ meta }: File) => {
			const slug = `/projects${slugFromPath(path)}`;

			return meta && slug ? { slug, ...meta } : null;
		})
	);

	const posts = await Promise.all(promises);
	const publishedPosts = posts
		.filter((post): post is Post => post !== null && post.isPublished)
		.sort((a, b) => b.published.getTime() - a.published.getTime());

	return {
		body: publishedPosts,
	};
};
