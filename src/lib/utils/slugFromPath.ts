export const slugFromPath = (path: string) =>
	path.match(/([\w-/]+)\.(svelte|svelte\.md|md|svx)/i)?.[1] ?? null;
