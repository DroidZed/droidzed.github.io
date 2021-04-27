import { faTwitter, faReddit } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import Card from './Card';

const Grid: React.FC = () => {
	return (
		<div className='grid'>
			<Card
				title='Twitter'
				body='twitter.'
				href='https://www.twitter.com/Droid7ed'
				icon={faTwitter}
			/>
			<Card
				title='u/DroidZed'
				href='https://reddit.com/u/DroidZed'
				body='reddit.'
				icon={faReddit}
			/>
		</div>
	);
};

export default Grid;
