import type { Hex, RGB } from '../types';

export const rgbToHex = ([red, green, blue]: RGB): Hex => {
	return '#' + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
};
