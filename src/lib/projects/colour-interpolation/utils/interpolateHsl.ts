import type { RGB } from '$lib/utils/colours';
import { hslToRgb, rgbToHsl } from '$lib/utils/colours';

export const interpolateHsl = (from: RGB, to: RGB) => {
	return (factor = 0.5): RGB => {
		const fromHsl = rgbToHsl(from);
		const toHsl = rgbToHsl(to);

		for (let i = 0; i < 3; i++) {
			fromHsl[i] += factor * (toHsl[i] - fromHsl[i]);
		}

		console.log(hslToRgb(fromHsl));

		return hslToRgb(fromHsl);
	};
};
