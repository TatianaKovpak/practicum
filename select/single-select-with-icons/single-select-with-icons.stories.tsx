import type { Meta, StoryObj } from '@storybook/react';
import { SingleSelectWithIcons } from '.';
import '../../../../sass/_variables.scss';
import { singleSocialWithImgOptions } from '../fakeData';
import { useState } from 'react';
import { SingleOption } from '../types';

const meta: Meta<typeof SingleSelectWithIcons> = {
	title: 'UI-kit/Controls/Select/SingleSelectWithIcons',
	component: SingleSelectWithIcons,
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

type Story = StoryObj<typeof SingleSelectWithIcons>;

export const Default: Story = (args) => {
	const [value, setValue] = useState<SingleOption[]>([]);
	function Change(values: SingleOption[]) {
		setValue(values);
	}
	return (
		<SingleSelectWithIcons
			{...args}
			setSelectedValues={Change}
			initialValues={value}
		/>
	);
};

Default.args = {
	placeholder: 'Выберите значение',
	options: singleSocialWithImgOptions,
};

export const WithInitialValues: Story = (args) => {
	const [value, setValue] = useState<SingleOption[]>([
		singleSocialWithImgOptions[1],
	]);
	function Change(values: SingleOption[]) {
		setValue(values);
	}
	return (
		<SingleSelectWithIcons
			{...args}
			setSelectedValues={Change}
			initialValues={value}
		/>
	);
};

WithInitialValues.args = {
	placeholder: 'Выберите значение',
	options: singleSocialWithImgOptions,
};
