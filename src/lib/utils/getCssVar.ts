export default function getCssVar(variable: string, element: Element = document.body) {
	return window.getComputedStyle(element).getPropertyValue(variable);
}
