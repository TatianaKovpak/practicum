import type { Meta, StoryObj } from '@storybook/react';
import { TaskCounter } from '.';
import { Direction } from './types';

const meta: Meta<typeof TaskCounter> = {
	title: 'UI-kit/Information/TaskCounter',
	component: TaskCounter,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {},
	argTypes: {
		count: {
			name: 'count',
			defaultValue: 255,
			description: 'Count of',
			control: 'text',
		},
		text: {
			name: 'text',
			control: 'text',
			defaultValue: 'Заданий выполнено',
			description: 'Text',
		},
		direction: {
			name: 'direction',
			control: {
				type: 'inline-radio',
				options: [Direction.Row, Direction.Column],
			},
			defaultValue: Direction.Column,
			description: 'The location of the elements',
		},
	},
};

export default meta;

type Story = StoryObj<typeof TaskCounter>;

export const Column: Story = {
	args: {
		count: 255,
		text: 'Заданий выполнено',
		direction: Direction.Column,
	},
};

export const Row: Story = {
	args: {
		count: 999,
		text: 'Задач завершено В данной категории',
		direction: Direction.Row,
	},
};

export const ReversColorRow: Story = {
	decorators: [
		(Story) => (
			<div
				style={{
					inlineSize: '352px',
					boxShadow: '0px 0px 10px 0px rgba(55, 65, 70, 0.08)',
				}}
			>
				<Story />
			</div>
		),
	],
	args: {
		count: 35,
		text: 'Задач выполнено В данной категории',
		direction: Direction.RowRevers,
		countColor: 'color-link',
	},
};
