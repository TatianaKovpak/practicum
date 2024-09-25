import { FC } from 'react';
import clsx from 'clsx';

import { TaskCounterProps } from './types';

import style from './style.module.scss';

export const TaskCounter: FC<TaskCounterProps> = ({
	count,
	text,
	direction,
	countColor = 'color-accent',
}) => {
	return (
		<dl className={`${style.wrap} ${style[`${direction}Wrap`]}`}>
			<dt className={clsx(style.number, style[countColor])}>{count}</dt>
			<dd className={style.text}>{text}</dd>
		</dl>
	);
};
