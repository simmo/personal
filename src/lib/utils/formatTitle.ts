export const formatTitle = (title?: string | string[]): string => {
	return [...(typeof title === 'string' ? [title] : title ?? []), 'Mike Simmonds'].join(' - ');
};
