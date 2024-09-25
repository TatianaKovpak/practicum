export enum Direction {
	Row = 'row',
	RowRevers = 'rowRevers',
	Column = 'column',
}

export type TaskCounterProps = {
	count: number | string;
	text: string;
	direction: Direction;
	countColor?: 'color-accent' | 'color-link';
};
