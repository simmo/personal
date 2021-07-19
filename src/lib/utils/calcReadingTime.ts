import { addMinutes, formatDistance } from 'date-fns';

export default function calcReadingTime(text: string, wordsPerMinute = 220) {
	const words = text.trim().split(/\s+/).length;
	const minutesToRead = Math.ceil(words / wordsPerMinute);
	const now = Date.now();

	return formatDistance(now, addMinutes(now, minutesToRead));
}
