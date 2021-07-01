export type Metadata = {
	description: string;
	heading: string;
	title?: string | string[];
	og?: OpenGraph;
};

export type PostMetadata = Metadata & {
	isPublished: boolean;
	published: Date;
};

export type Page = Metadata & { slug: string };

export type Post = PostMetadata & { slug: string };

export type OpenGraph = Partial<Record<'description' | 'image' | 'title' | 'type', string>>;
