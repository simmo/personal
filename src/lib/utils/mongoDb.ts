import { MongoClient } from 'mongodb';

const uri = `mongodb+srv://${import.meta.env.VITE_DB_USER}:${
	import.meta.env.VITE_DB_PASS
}@cluster.23itp.mongodb.net/production?retryWrites=true&w=majority`;

const cached: { conn?: MongoClient; promise?: Promise<MongoClient> } = {};

export async function connectToDatabase() {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		cached.promise = MongoClient.connect(uri);
	}

	cached.conn = await cached.promise;

	return cached.conn;
}
