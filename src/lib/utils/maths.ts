export function random(from: number, to: number) {
	return from + Math.random() * Math.abs(from - to);
}
