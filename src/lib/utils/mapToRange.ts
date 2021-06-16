export const mapToRange = (
	value: number,
	currentFrom: number,
	currentTo: number,
	targetFrom: number,
	targetTo: number
) => ((value - currentFrom) / (currentTo - currentFrom)) * (targetTo - targetFrom) + targetFrom;
