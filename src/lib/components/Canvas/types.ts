export type CanvasContext = {
	register: (draw: DrawFn) => () => void;
};

export type Config = {
	ctx: CanvasRenderingContext2D;
	height: number;
	width: number;
};

export type DrawFn = (config: Config) => void;
