import React from 'react';
import style from './style.module.scss';
import { ISocialLink, SocialLinkSize, SocialLinkTypes } from './types';
import telegramIcon from '../../../assets/icons/social_telegram_light_grey.svg';
import vkIcon from '../../../assets/icons/social_vk_light_grey.svg';
import okIcon from '../../../assets/icons/social_ok_light_grey.svg';
import youtubeIcon from '../../../assets/icons/social_youtube_light_grey.svg';
import instagramIcon from '../../../assets/icons/social_instagram_light_grey.svg';
import facebookIcon from '../../../assets/icons/social_facebook_light_grey.svg';
import inIcon from '../../../assets/icons/social_in_light_grey.svg';

const socialLinkIcon: { [key in SocialLinkTypes]: string } = {
	[SocialLinkTypes.telegram]: telegramIcon,
	[SocialLinkTypes.vk]: vkIcon,
	[SocialLinkTypes.ok]: okIcon,
	[SocialLinkTypes.youtube]: youtubeIcon,
	[SocialLinkTypes.instagram]: instagramIcon,
	[SocialLinkTypes.facebook]: facebookIcon,
	[SocialLinkTypes.in]: inIcon,
};

const SocialLink: React.FC<ISocialLink> = ({ name, link, width, children }) => {
	const styleWidth =
		width === SocialLinkSize.small ? `${style.small}` : `${style.medium}`;

	return (
		<a href={link} className={`${style.link}`} target="blank">
			<img
				className={`${styleWidth} ${style.icon}`}
				src={socialLinkIcon[name] as string}
				alt={`логотип ${name}`}
			/>
			{children}
		</a>
	);
};

export default SocialLink;
