export type Hex = string;

export type HSL = [hue: number, saturation: number, lightness: number];

export type RGB = [red: number, green: number, blue: number];

const hexRegExp = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

export const hexToRgb = (hex: Hex): RGB => {
	const result = hexRegExp.exec(hex);

	if (!result) throw new Error(`${hex} is not a hex`);

	const [, red, green, blue] = result;

	return [parseInt(red, 16), parseInt(green, 16), parseInt(blue, 16)];
};

export const hexToHsl = (hex: Hex): HSL => {
	return rgbToHsl(hexToRgb(hex));
};

export const hslToHex = (hsl: HSL): Hex => {
	return rgbToHex(hslToRgb(hsl));
};

export const hslToRgb = ([h, s, l]: HSL): RGB => {
	s /= 100;
	l /= 100;
	const k = (n) => (n + h / 30) % 12;
	const a = s * Math.min(l, 1 - l);
	const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
	return [255 * f(0), 255 * f(8), 255 * f(4)];
};

export const rgbToHex = ([red, green, blue]: RGB): Hex => {
	return '#' + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
};

export const rgbToHsl = ([r, g, b]: RGB): HSL => {
	// Make r, g, and b fractions of 1
	r /= 255;
	g /= 255;
	b /= 255;

	// Find greatest and smallest channel values
	let cmin = Math.min(r, g, b),
		cmax = Math.max(r, g, b),
		delta = cmax - cmin,
		h = 0,
		s = 0,
		l = 0;

	// Calculate hue
	// No difference
	if (delta == 0) h = 0;
	// Red is max
	else if (cmax == r) h = ((g - b) / delta) % 6;
	// Green is max
	else if (cmax == g) h = (b - r) / delta + 2;
	// Blue is max
	else h = (r - g) / delta + 4;

	h = Math.round(h * 60);

	// Make negative hues positive behind 360°
	if (h < 0) h += 360;

	// Calculate lightness
	l = (cmax + cmin) / 2;

	// Calculate saturation
	s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

	// Multiply l and s by 100
	s = +(s * 100).toFixed(1);
	l = +(l * 100).toFixed(1);

	return [h, s, l];
};

export const hsl = ([hue, saturation, lightness]: HSL): string => {
	return `hsl(${hue}, ${Math.round(saturation)}%, ${Math.round(lightness)}%)`;
};

export const rgb = ([red, green, blue]: RGB): string => {
	return `rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`;
};
