import { faTwitter, faReddit } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Card from './Card';
import ExternalLinkCard from './ExternalLinkCard';

const Grid: React.FC = () => {
	return (
		<div className='gridLayout'>
			<ExternalLinkCard
				title='Twitter'
				href='https://www.twitter.com/Droid7ed'
				icon={faTwitter}
			/>
			<ExternalLinkCard
				title='u/DroidZed'
				href='https://reddit.com/u/DroidZed'
				icon={faReddit}
			/>
			<Card title='About' href='/about' icon={faInfoCircle} />
		</div>
	);
};

export default Grid;
