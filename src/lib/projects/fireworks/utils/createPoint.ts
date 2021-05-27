import type { Point } from '../types';

export default function createPoint(x: number, y: number): Point {
	return {
		x,
		y,
		add(value: number | { x?: number; y?: number }) {
			if (typeof value === 'number') {
				this.x += value;
				this.y += value;
			} else {
				const { x = 0, y = 0 } = value;

				this.x += x;
				this.y += y;
			}
		},
		set(value: number | { x?: number; y?: number }) {
			if (typeof value === 'number') {
				this.x = value;
				this.y = value;
			} else {
				const { x = 0, y = 0 } = value;

				this.x = x;
				this.y = y;
			}
		},
	};
}
