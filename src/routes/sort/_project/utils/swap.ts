export default function swap<T>(array: T[], a: number, b: number): void {
	[array[a], array[b]] = [array[b], array[a]];
}
