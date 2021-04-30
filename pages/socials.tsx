import React, { useContext } from 'react';
import { AppThemeContext } from '../store/themeStore';
import HeadTag from '../components/HeadTag';
import DiscordWidget from '../components/DiscordWidget';
import YouTubeWidget from '../components/YouTubeWidget';
import TwitterWidget from '../components/TwitterWidget';

export default function Socials(): JSX.Element {
	const { theme } = useContext(AppThemeContext);
	return (
		<div className={!theme ? 'dark' : ''}>
			<div className='top-container dark:top-container-dark'>
				<HeadTag title='Socials' />
				<div>
					<h1>Internet Presence</h1>
					<DiscordWidget />
					<YouTubeWidget />
					<TwitterWidget />
				</div>
			</div>
		</div>
	);
}
