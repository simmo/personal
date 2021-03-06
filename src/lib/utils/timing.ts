export function debounce<T extends () => unknown>(fn: T, timeout = 300): <A>(...args: A[]) => void {
	let timer: ReturnType<typeof setTimeout>;

	return function (this: any, ...args) {
		clearTimeout(timer);

		timer = setTimeout(() => {
			fn.apply(this, args);
		}, timeout);
	};
}

export function throttle<T extends (...args: any[]) => any>(
	fn: T,
	limit: number
): (...args: Parameters<T>) => void {
	let inThrottle: boolean;

	return function (this: any, ...args) {
		if (!inThrottle) {
			inThrottle = true;
			fn.apply(this, args);
			setTimeout(() => (inThrottle = false), limit);
		}
	};
}
