import { random } from '$lib/utils/maths';
import type { FireworkParticle } from '../types';
import createParticle from './createParticle';
import createPoint from './createPoint';

export default function createFirework(x: number, y: number): FireworkParticle {
	return {
		...createParticle(x, y),
		colour: [Math.round(random(0, 360)), '100%', '70%'],
		done: false,
		isExploded: false,
		payload: [],
		velocity: createPoint(0, random(-18, -14)),
	};
}
