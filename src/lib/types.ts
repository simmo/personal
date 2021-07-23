export interface Page {
	description: string;
	heading: string;
	slug: string;
	title?: string | string[];
	og?: {
		description?: string;
		image?: string;
		title?: string;
		type?: string;
	};
}

export interface Post extends Page {
	isPublished: boolean;
	published: Date;
}
