import { faTwitter, faReddit } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';
import Card from '../Card';

import styles from './Grid.module.css';

const Grid: React.FC = () => {
	return (
		<div className={styles.gridLayout}>
			<a href='https://www.twitter.com/Droid7ed' target='_blank'>
				<Card
					title='Twitter'
					icon={faTwitter}
					textColor='beautifulBlue'
					shadowColor='beautifulBlueShadow'
				/>
			</a>
			<a href='https://reddit.com/u/DroidZed' target='_blank'>
				<Card
					title='u/DroidZed'
					icon={faReddit}
					textColor='bloodOrange'
					shadowColor='bloodOrangeShadow'
				/>
			</a>
			<Link href='/about'>
				<a>
					<Card
						title='About'
						icon={faInfoCircle}
						textColor='goldenSun'
						shadowColor='goldenSunShadow'
					/>
				</a>
			</Link>
		</div>
	);
};

export default Grid;
