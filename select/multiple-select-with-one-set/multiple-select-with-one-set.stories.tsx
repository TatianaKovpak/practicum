import type { Meta, StoryObj } from '@storybook/react';
import { MultipleSelectWithOneSet } from '.';
import '../../../../sass/_variables.scss';
import { singleOptions } from '../fakeData';
import { SingleOption } from '../types';
import { useState } from 'react';

const meta: Meta<typeof MultipleSelectWithOneSet> = {
	title: 'UI-kit/Controls/Select/MultipleSelectWithOneSet',
	component: MultipleSelectWithOneSet,
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

type Story = StoryObj<typeof MultipleSelectWithOneSet>;

export const Default: Story = (args) => {
	const [value, setValue] = useState<SingleOption[]>([]);
	function Change(values: SingleOption[]) {
		setValue(values);
	}
	return (
		<MultipleSelectWithOneSet
			{...args}
			setSelectedValues={Change}
			initialValues={value}
		/>
	);
};

Default.args = {
	label: 'Выбрано видов деятельности',
	placeholder: 'Виды деятельности',
	options: singleOptions,
};

export const WithInitialValues: Story = (args) => {
	const [value, setValue] = useState<SingleOption[]>([
		{ value: 'Rock' },
		{ value: 'Paper' },
		{ value: 'TestingValue' },
	]);
	function Change(values: SingleOption[]) {
		setValue(values);
	}
	return (
		<MultipleSelectWithOneSet
			{...args}
			setSelectedValues={Change}
			initialValues={value}
		/>
	);
};

WithInitialValues.args = {
	label: 'Выбрано видов деятельности',
	placeholder: 'Виды деятельности',
	options: singleOptions,
};
