import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';
import TaskSection from './index';

const meta = {
	title: 'UI-kit/Information/TaskSection',
	component: TaskSection,
	tags: ['autodocs'],
	decorators: [withRouter],
	args: {},
} satisfies Meta<typeof TaskSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Целевая аудитория',
		description:
			'Необходимо сделать дизайн презентации для потенциальных партнеров',
		issue: false,
	},
};

export const Editable: Story = {
	args: {
		title: 'Количество страниц и разделы',
		description: '10 слайдов',
		issue: true,
	},
};
