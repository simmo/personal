import type { Post } from '$lib/types';
import { slugFromPath } from '$lib/utils/slugFromPath';
import type { RequestHandler } from '@sveltejs/kit';

const files = import.meta.glob('./*/*.md');

export const get: RequestHandler = async ({ params }) => {
	const filesMatchingSlug = Object.entries(files).filter(([path]) =>
		path.startsWith(`./${params.slug}/`)
	);

	const promises: Promise<null | Post>[] = filesMatchingSlug.map(async ([path, resolver]) => {
		const slug = slugFromPath(path);
		const { metadata } = await resolver();

		return metadata && slug ? { slug, ...metadata, published: new Date(metadata.published) } : null;
	});

	const posts = await Promise.all(promises);
	const publishedPosts = posts
		.filter((post): post is Post => post !== null && post.isPublished)
		.sort((a, b) => b.published.getTime() - a.published.getTime());

	return {
		body: publishedPosts,
	};
};
