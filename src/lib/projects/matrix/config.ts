import track from '$lib/utils/track';
import { writable } from 'svelte/store';

export const blur = writable(false);

export const showFPS = writable(false);

blur.subscribe((value) => {
	track('check', {
		category: 'matrix',
		label: 'blur',
		value: value ? 1 : 0,
	});
});

showFPS.subscribe((value) => {
	track('check', {
		category: 'matrix',
		label: 'showFPS',
		value: value ? 1 : 0,
	});
});
