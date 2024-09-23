import type { Meta, StoryObj } from '@storybook/react';
import { MultipleSelectWithCommas } from '.';
import '../../../../sass/_variables.scss';
import { singleOptionsWithCommas } from '../fakeData';
import { useState } from 'react';
import { SingleOption } from '../types';

const meta: Meta<typeof MultipleSelectWithCommas> = {
	title: 'UI-kit/Controls/Select/MultipleSelectWithCommas',
	component: MultipleSelectWithCommas,
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

type Story = StoryObj<typeof MultipleSelectWithCommas>;

export const Default: Story = (args) => {
	const [value, setValue] = useState<SingleOption[]>([]);
	function Change(values: SingleOption[]) {
		setValue(values);
	}
	return (
		<MultipleSelectWithCommas
			{...args}
			setSelectedValues={Change}
			initialValues={value}
		/>
	);
};

Default.args = {
	label: 'Предпочитаемый способ связи',
	placeholder: 'Предпочитаемый способ связи',
	options: singleOptionsWithCommas,
};

export const WithInitialValues: Story = (args) => {
	const [value, setValue] = useState<SingleOption[]>([{ value: 'Telegram' }]);
	function Change(values: SingleOption[]) {
		setValue(values);
	}
	return (
		<MultipleSelectWithCommas
			{...args}
			setSelectedValues={Change}
			initialValues={value}
		/>
	);
};

WithInitialValues.args = {
	label: 'Предпочитаемый способ связи',
	placeholder: 'Предпочитаемый способ связи',
	options: singleOptionsWithCommas,
};
