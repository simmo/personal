export type HSL = [hue: number, saturation: string, lightness: string];

export type Point = {
	x: number;
	y: number;
	add: (position: { x?: number; y?: number } | number) => void;
	set: (position: { x?: number; y?: number } | number) => void;
};

export type Particle = {
	acceleration: Point;
	position: Point;
	velocity: Point;
};

export type FireworkParticle = Particle & {
	colour: HSL;
	done: boolean;
	isExploded: boolean;
	payload: Sparkle[];
};

export type Sparkle = Particle & {
	alpha: number;
};
