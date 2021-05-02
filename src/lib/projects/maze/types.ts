export type Item = {
	column: number;
	row: number;
	size: number;
	walls: Walls;
	visited: boolean;
	is: (position: { row: number; column: number }) => boolean;
};

export type Walls = { top: boolean; right: boolean; bottom: boolean; left: boolean };
