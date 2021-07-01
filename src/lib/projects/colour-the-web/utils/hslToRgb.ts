import type { HSL, RGB } from '../types';

export const hslToRgb = ([hue, saturation, lightness]: HSL): RGB => {
	saturation /= 100;
	lightness /= 100;

	const primary = (1 - Math.abs(2 * lightness - 1)) * saturation;
	const secondary = primary * (1 - Math.abs(((hue / 60) % 2) - 1));
	const m = lightness - primary / 2;

	let red = 0;
	let green = 0;
	let blue = 0;

	if (0 <= hue && hue < 60) {
		red = primary;
		green = secondary;
		blue = 0;
	} else if (60 <= hue && hue < 120) {
		red = secondary;
		green = primary;
		blue = 0;
	} else if (120 <= hue && hue < 180) {
		red = 0;
		green = primary;
		blue = secondary;
	} else if (180 <= hue && hue < 240) {
		red = 0;
		green = secondary;
		blue = primary;
	} else if (240 <= hue && hue < 300) {
		red = secondary;
		green = 0;
		blue = primary;
	} else if (300 <= hue && hue < 360) {
		red = primary;
		green = 0;
		blue = secondary;
	}

	red = Math.round((red + m) * 255);
	green = Math.round((green + m) * 255);
	blue = Math.round((blue + m) * 255);

	return [red, green, blue];
};
