export const toSentenceCase = (string: string) => {
	string = string.replace(/-/g, ' ');

	return string.slice(0, 1).toUpperCase() + string.slice(1);
};
