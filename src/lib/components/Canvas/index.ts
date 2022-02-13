import { browser } from '$app/env';
import { readable, type Subscriber } from 'svelte/store';

export { default as Canvas } from './Canvas.svelte';
export { default as Layer } from './Layer.svelte';
export type { DrawFn, Config } from './types';

let rafId: number;

const now = Date.now();

function start(set: Subscriber<number>) {
	if (!browser) return;

	set(Date.now() - now);

	rafId = window.requestAnimationFrame(() => start(set));

	return () => window.cancelAnimationFrame(rafId);
}

export const tick = readable(Date.now() - now, start);
