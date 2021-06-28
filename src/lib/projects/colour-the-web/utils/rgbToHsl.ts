import type { HSL, RGB } from '../types';

export const rgbToHsl = ([red, green, blue]: RGB): HSL => {
	red /= 255;
	green /= 255;
	blue /= 255;

	const min = Math.min(red, green, blue);
	const max = Math.max(red, green, blue);

	let hue: number, saturation: number;
	let lightness = (max + min) / 2;

	if (min === max) {
		hue = saturation = 0;
	} else {
		const delta = max - min;

		if (max === red) {
			hue = ((green - blue) / delta) % 6;
		} else if (max === green) {
			hue = (blue - red) / delta + 2;
		} else {
			hue = (red - green) / delta + 4;
		}

		hue = Math.round(Math.abs(hue * 60));
		saturation = Math.round((delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1))) * 100);
	}

	lightness = Math.round(lightness * 100);

	return [hue, saturation, lightness];
};
