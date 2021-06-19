import { browser } from '$app/env';

export default function getCssVar(variable: string, element?: Element) {
	if (!browser) return '';

	return window
		.getComputedStyle(element ?? document.body)
		.getPropertyValue(variable)
		.trim();
}
