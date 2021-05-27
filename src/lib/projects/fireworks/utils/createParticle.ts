import type { Particle } from '../types';
import createPoint from './createPoint';

export default function createParticle(x: number, y: number): Particle {
	return {
		acceleration: createPoint(0, 0),
		position: createPoint(x, y),
		velocity: createPoint(0, 0),
	};
}
