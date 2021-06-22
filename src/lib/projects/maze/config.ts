import { writable } from 'svelte/store';

export enum State {
	Idle,
	Playing,
	Paused,
	Completed,
}

export const state = writable(State.Idle, (set) => () => {
	// Once last subscriber has unsubscribed, reset the store
	set(State.Idle);
});
