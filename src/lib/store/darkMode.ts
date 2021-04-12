import { browser } from '$app/env';
import { derived, readable, writable } from 'svelte/store';

export const systemPreference = readable(false, (set) => {
	if (!browser) return;

	// Set initial value to result of dark mode system query
	set(window._systemPrefersDarkQuery.matches);

	// Handle change to system query result
	const handleChange = ({ matches }: MediaQueryListEvent) => {
		set(matches);
	};

	window._systemPrefersDarkQuery.addEventListener('change', handleChange);

	return () => {
		window._systemPrefersDarkQuery.removeEventListener('change', handleChange);
	};
});

export const userPreference = writable<boolean>(false, (set) => {
	if (!browser) return;

	// Get user preference from local storage
	const value = window.localStorage.getItem('theme');

	// If we don't have a value, leave it, if we do, parse it
	set(value === null ? value : JSON.parse(value));
});

export const isDarkMode = derived<[typeof systemPreference, typeof userPreference], boolean>(
	[systemPreference, userPreference],
	([$systemPreference, $userPreference], set) => {
		set($userPreference === null ? $systemPreference : $userPreference);
	}
);

// Persist user preference to local storage
userPreference.subscribe((value) => {
	if (!browser) return;

	// If user preference if null clear storage
	// or save it
	if (value === null) {
		window.localStorage.removeItem('theme');
	} else {
		window.localStorage.setItem('theme', JSON.stringify(value));
	}
});

// Toggle theme when the derived value changes
isDarkMode.subscribe((enable) => {
	if (!browser) return;

	window._toggleTheme(enable);
});
