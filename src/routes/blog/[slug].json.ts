import { connectToDatabase } from '$lib/utils/mongoDb';
import type { RequestHandler } from '@sveltejs/kit';
import type { ObjectId } from 'mongodb';

export const get: RequestHandler = async ({ params }) => {
	const headers = {
		'cache-control': 's-maxage=60, stale-while-revalidate',
	};
	const keyedStats: { [slug: string]: { views: number } } = {};

	try {
		const client = await connectToDatabase();
		const stats = await client
			.db(import.meta.env.VITE_DB_DATA)
			.collection<{ _id: ObjectId; slug: string; views: number }>('posts')
			.findOne({ slug: params.slug });

		console.log(stats, params.slug);

		return { body: { views: stats?.views ?? 0 }, headers };
	} catch (error) {
		console.error(error);
	}

	return { body: {}, headers };
};
