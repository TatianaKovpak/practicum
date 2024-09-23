import type { Meta, StoryObj } from '@storybook/react';
import { PersonalAccountFund } from '.';

const meta: Meta<typeof PersonalAccountFund> = {
	title: 'Services/NKO/PersonalAccountFund',
	component: PersonalAccountFund,
	parameters: {
		layout: 'start',
	},
	tags: ['autodocs'],
	args: {},
};

export default meta;

type Story = StoryObj<typeof PersonalAccountFund>;

export const Desktop: Story = () => {
	return (
		<>
			<PersonalAccountFund />
		</>
	);
};

export const Mobile: Story = () => {
	return (
		<div style={{ width: '312px' }}>
			<PersonalAccountFund />
		</div>
	);
};

Desktop.args = {};
Mobile.args = {};
