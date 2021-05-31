import { writable } from 'svelte/store';

export const offset = writable<{ x: number; y: number }>({ x: 0, y: 0 });
