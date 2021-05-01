import React from 'react';
import { faTwitter, faReddit } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Card from './Card';

const Grid: React.FC = () => {
	return (
		<div
			style={{ maxWidth: '800px' }}
			className='centered-flex mt-12 smd:w-100'
		>
			<a href='https://www.twitter.com/Droid7ed' target='_blank'>
				<Card title='Twitter' icon={faTwitter} textColor='beautifulBlue' />
			</a>
			<a href='https://reddit.com/u/DroidZed' target='_blank'>
				<Card title='Reddit' icon={faReddit} textColor='bloodOrange' />
			</a>
			<Link href='/about'>
				<a>
					<Card title='About' icon={faInfoCircle} textColor='goldenSun' />
				</a>
			</Link>
		</div>
	);
};

export default Grid;
