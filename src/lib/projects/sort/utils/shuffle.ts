import { random } from '$lib/utils/maths';
import swap from './swap';

export default function shuffle<T>(items: T[]): T[] {
	const shuffledItems = [...items];

	for (let i = shuffledItems.length - 1; i > 0; i--) {
		const j = Math.floor(random(i + 1));

		swap(shuffledItems, i, j);
	}

	return shuffledItems;
}
