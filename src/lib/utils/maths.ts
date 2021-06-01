export function random(of: number): number;
export function random(from: number, to: number): number;
export function random(a: number, b?: number) {
	const [from, to] = typeof b !== 'undefined' ? [a, b] : [0, a];

	return from + Math.random() * (to - from);
}
