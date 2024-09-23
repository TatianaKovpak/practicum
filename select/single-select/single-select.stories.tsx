import type { Meta, StoryObj } from '@storybook/react';
import { SingleSelect } from '.';
import '../../../../sass/_variables.scss';
import { singleOptionsWhereKnow } from '../fakeData';
import { useState } from 'react';
import { SingleOption } from '../types';

const meta: Meta<typeof SingleSelect> = {
	title: 'UI-kit/Controls/Select/SingleSelect',
	component: SingleSelect,
	parameters: {
		layout: 'start',
	},
	tags: ['autodocs'],
	args: {},
	argTypes: {
		setSelectedValues: {
			name: 'setSelectedValues',
			options: 'func',
			controls: 'func',
			description:
				'Allows you to move the selected values to the state of the parent container',
		},
		label: {
			name: 'label',
			options: 'string',
			controls: 'text',
			description: 'Input label',
		},
		placeholder: {
			name: 'placeholder',
			options: 'string',
			controls: 'text',
			description: 'Input placeholder',
		},
		options: {
			name: 'options',
			controls: 'object',
			description: 'The array with props of Select',
		},
		initialValues: {
			name: 'initialValue',
			controls: 'object',
			description: 'The array with props of Select',
		},
	},
};

export default meta;

type Story = StoryObj<typeof SingleSelect>;

export const Default: Story = (args) => {
	const [value, setValue] = useState<SingleOption[]>([]);
	function Change(values: SingleOption[]) {
		setValue(values);
	}
	return (
		<SingleSelect {...args} setSelectedValues={Change} initialValues={value} />
	);
};

Default.args = {
	label: 'Как ты о нас узнал?',
	placeholder: 'Как ты о нас узнал?',
	options: singleOptionsWhereKnow,
};

export const WithInitialValues: Story = (args) => {
	const [value, setValue] = useState<SingleOption[]>([
		singleOptionsWhereKnow[1],
	]);
	function Change(values: SingleOption[]) {
		setValue(values);
	}
	return (
		<SingleSelect {...args} setSelectedValues={Change} initialValues={value} />
	);
};

WithInitialValues.args = {
	label: 'Как ты о нас узнал?',
	placeholder: 'Как ты о нас узнал?',
	options: singleOptionsWhereKnow,
};
