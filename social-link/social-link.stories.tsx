import type { Meta, StoryObj } from '@storybook/react';
import SocialLink from '.';
import { SocialLinkSize, SocialLinkTypes } from './types';

const meta: Meta<typeof SocialLink> = {
	title: 'UI-kit/Navigation/SocialLink',
	component: SocialLink,
	parameters: {
		layout: 'centered',
	},
	args: {
		name: SocialLinkTypes.telegram,
	},
	argTypes: {
		name: {
			type: 'string',
			description: 'Вариант логотипа',
			options: [
				SocialLinkTypes.telegram,
				SocialLinkTypes.vk,
				SocialLinkTypes.ok,
				SocialLinkTypes.youtube,
				SocialLinkTypes.instagram,
				SocialLinkTypes.facebook,
			],
			control: {
				type: 'radio',
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof SocialLink>;

export const Default: Story = {
	args: {
		width: SocialLinkSize.medium,
	},
};

export const SmallIcon: Story = {
	args: {
		width: SocialLinkSize.small,
	},
};
