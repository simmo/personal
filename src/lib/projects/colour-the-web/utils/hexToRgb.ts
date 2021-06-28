import type { Hex, RGB } from '../types';

const hexRegExp = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

export const hexToRgb = (hex: Hex): RGB => {
	const result = hexRegExp.exec(hex);

	if (!result) throw new Error(`${hex} is not a hex`);

	const [, red, green, blue] = result;

	return [parseInt(red, 16), parseInt(green, 16), parseInt(blue, 16)];
};
