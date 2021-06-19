export type Meta = {
	description: string;
	heading: string;
	title?: string | string[];
	og?: OpenGraph;
};

export type PostMeta = Meta & {
	isPublished: boolean;
	published: Date;
};

export type Page = Meta & { slug: string };

export type Post = PostMeta & { slug: string };

export type OpenGraph = Partial<Record<'description' | 'image' | 'title' | 'type', string>>;
