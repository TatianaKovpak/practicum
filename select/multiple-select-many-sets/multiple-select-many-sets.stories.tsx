import type { Meta, StoryObj } from '@storybook/react';
import { MultipleSelectManySets } from '.';
import '../../../../sass/_variables.scss';
import { multipleOptions } from '../fakeData';
import { SingleOption } from '../types';
import { useState } from 'react';

const meta: Meta<typeof MultipleSelectManySets> = {
	title: 'UI-kit/Controls/Select/MultipleSelectManySets',
	component: MultipleSelectManySets,
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
		hideCount: {
			name: 'hideCount',
			options: 'boolean',
			controls: 'radio',
			description: 'Hide count',
		},
		options: {
			name: 'options',
			controls: 'object',
			description: 'The array with props of Select',
		},
		dropdownTitle: {
			name: 'dropdownTitle',
			options: 'string',
			controls: 'text',
			description:
				'The title of the drop-down list with multiple selection in the mobile extension',
		},
		initialValues: {
			name: 'initialValue',
			controls: 'object',
			description: 'The array with props of Select',
		},
	},
};

export default meta;

type Story = StoryObj<typeof MultipleSelectManySets>;

export const Default: Story = (args) => {
	const [value, setValue] = useState<SingleOption[]>([]);
	function Change(values: SingleOption[]) {
		setValue(values);
	}
	return (
		<MultipleSelectManySets
			{...args}
			setSelectedValues={Change}
			initialValues={value}
		/>
	);
};

Default.args = {
	label: 'Выбраны',
	placeholder: 'Выбрать',
	hideCount: false,
	options: multipleOptions,
	dropdownTitle: 'Выбор компетенции',
	setRemoveSelectedValue: () => {},
};

export const WithInitialValues: Story = (args) => {
	const [value, setValue] = useState<SingleOption[]>([
		{ value: 'Организация мероприятий' },
		{ value: 'Обучение и тренинги' },
		{ value: 'IT поддержка ' },
		{ value: 'Аналитика' },
	]);
	function Change(values: SingleOption[]) {
		setValue(values);
	}
	return (
		<MultipleSelectManySets
			{...args}
			setSelectedValues={Change}
			initialValues={value}
		/>
	);
};

WithInitialValues.args = {
	label: 'Выбраны',
	placeholder: 'Выбрать',
	hideCount: false,
	options: multipleOptions,
	dropdownTitle: 'Выбор компетенции',
	setRemoveSelectedValue: () => {},
};
