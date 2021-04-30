import { faTwitter, faReddit } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';
import Card from '../Card';

const Grid: React.FC = () => {
	return (
		<div className='gridLayout'>
			<a href='https://www.twitter.com/Droid7ed' target="_blank">
				<Card
					title='Twitter'
					icon={faTwitter}
					shadowColor='blue'
				/>
			</a>
			<a href="https://reddit.com/u/DroidZed" target="_blank">

				<Card
					title='u/DroidZed'
					icon={faReddit}
					shadowColor='orange'
				/>
			</a>
			<Link href='/about'>
				<a>
					<Card title='About'
						shadowColor='golden'
						icon={faInfoCircle} />
				</a>
			</Link>
		</div>
	);
};

export default Grid;
