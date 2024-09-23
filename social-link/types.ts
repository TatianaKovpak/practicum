import { ReactNode } from 'react';

export interface ISocialLink {
	name: SocialLinkTypes | string;
	link: string;
	width: SocialLinkSize;
	children?: ReactNode;
}

export enum SocialLinkTypes {
	telegram = 'telegram',
	vk = 'vk',
	ok = 'ok',
	youtube = 'youtube',
	instagram = 'instagram',
	facebook = 'facebook',
	in = 'linkedin',
}

export enum SocialLinkSize {
	small = 'small',
	medium = 'medium',
}
