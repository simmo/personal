import { throttle } from '$lib/utils/timing';
import track from '$lib/utils/track';
import { writable } from 'svelte/store';

export const showFPS = writable(false);

showFPS.subscribe((value) => {
	track('check', {
		category: 'starfield',
		label: 'showFPS',
		value: value ? 1 : 0,
	});
});

export const speed = writable(10);

speed.subscribe(
	throttle<typeof speed.set>((value) => {
		track('change', {
			category: 'starfield',
			label: 'speed',
			value,
		});
	}, 100)
);

export const withPride = writable(new Date().getMonth() === 5);

withPride.subscribe((value) => {
	track('check', {
		category: 'starfield',
		label: 'showPride',
		value: value ? 1 : 0,
	});
});
