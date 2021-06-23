import { throttle } from '$lib/utils/timing';
import track from '$lib/utils/track';
import { derived, writable } from 'svelte/store';
import shuffle from './utils/shuffle';

export const speed = writable(0);

speed.subscribe(
	throttle<typeof speed.set>((value) => {
		track('change', {
			category: 'sort',
			label: 'speed',
			value,
		});
	}, 100)
);

export const enum Dataset {
	Random,
	Reversed,
}

export const dataset = writable(Dataset.Random);

export const items = derived(dataset, ($value) => {
	const initialItems: number[] = Array.from({ length: 100 }, (_, x) => x + 1);

	switch ($value) {
		case Dataset.Reversed:
			return [...initialItems].reverse();
		case Dataset.Random:
			return shuffle(initialItems);
		default:
			throw new Error('Unhandled dataset');
	}
});
