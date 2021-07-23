import type { RGB } from '$lib/utils/colours';

export const interpolateRgb = (from: RGB, to: RGB) => {
	return (factor = 0.5): RGB => {
		const next: RGB = [...from];

		for (let i = 0; i < 3; i++) {
			next[i] = Math.round(next[i] + factor * (to[i] - next[i]));
		}

		return next;
	};
};
