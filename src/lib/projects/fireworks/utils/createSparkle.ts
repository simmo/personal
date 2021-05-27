import type { Sparkle } from '../types';
import createParticle from './createParticle';

export default function createSparkle(x: number, y: number): Sparkle {
	return {
		...createParticle(x, y),
		alpha: 1,
	};
}
