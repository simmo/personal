/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

interface Window {
	/** Google Global Site Tag */
	gtag?: (
		command: 'event',
		action: string,
		params: {
			event_category: string;
			event_label: string;
			value?: number;
		}
	) => void;

	_systemPrefersDarkQuery: MediaQueryList;

	_toggleTheme: (enable: boolean) => void;
}
