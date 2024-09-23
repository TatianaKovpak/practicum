import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SingleSelectWithSort } from '.';
import '../../../../sass/_variables.scss';
import { singleEmployeesOptions } from '../fakeData';
import { SingleOption } from '../types';

const meta: Meta<typeof SingleSelectWithSort> = {
	title: 'UI-kit/Controls/Select/SingleSelectWithSort',
	component: SingleSelectWithSort,
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
		onClickUpSortArrow: {
			name: 'onClickUpSortArrow',
			options: 'func',
			controls: 'func',
			description:
				'A function that will work by clicking on the sort up arrow (DESC)',
		},
		onClickDownSortArrow: {
			name: 'onClickDownSortArrow',
			options: 'func',
			controls: 'func',
			description:
				'A function that will work by clicking on the sort down arrow (ASC)',
		},
		initialValues: {
			name: 'initialValue',
			controls: 'object',
			description: 'The array with props of Select',
		},
	},
};

export default meta;

type Story = StoryObj<typeof SingleSelectWithSort>;

export const Default: Story = (args) => {
	const [value, setValue] = useState<string>('Фамилии и имени');
	const [state, setState] = useState<SingleOption[]>([]);
	function Change(values: SingleOption[]) {
		setState(values);
	}
	return (
		<SingleSelectWithSort
			{...args}
			value={value}
			setValue={setValue}
			setSelectedValues={Change}
			initialValues={state}
		/>
	);
};

Default.args = {
	label: 'Сортировать по ',
	placeholder: 'Сортировать: по фамилии и имени',
	options: singleEmployeesOptions,
	onClickUpSortArrow: () => {},
	onClickDownSortArrow: () => {},
};

export const WithInitialValues: Story = (args) => {
	const [value, setValue] = useState<string>('Фамилии и имени');
	const [state, setState] = useState<SingleOption[]>([
		singleEmployeesOptions[1],
	]);
	function Change(values: SingleOption[]) {
		setState(values);
	}
	return (
		<SingleSelectWithSort
			{...args}
			value={value}
			setValue={setValue}
			setSelectedValues={Change}
			initialValues={state}
		/>
	);
};

WithInitialValues.args = {
	label: 'Сортировать по ',
	placeholder: 'Сортировать: по фамилии и имени',
	options: singleEmployeesOptions,
	onClickUpSortArrow: () => {},
	onClickDownSortArrow: () => {},
};
