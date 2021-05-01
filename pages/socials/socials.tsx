import React from 'react';
import HeadTag from '../components/HeadTag';
import DiscordWidget from '../components/DiscordWidget';
import YouTubeWidget from '../components/YouTubeWidget';
import TwitterWidget from '../components/TwitterWidget';

import TopContainer from '../components/TopContainer';

export default function Socials() {
	return (
		<TopContainer>
			<HeadTag title='Socials' />
			<div>
				<h1>Internet Presence</h1>
				<div>
					<DiscordWidget />
					<YouTubeWidget />
					<TwitterWidget />
				</div>
			</div>
		</TopContainer>
	);
}
