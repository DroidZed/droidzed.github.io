import React, { useContext } from 'react';
import HeadTag from '../../components/HeadTag';
import { AppThemeContext } from '../../store/themeStore';

import styles from './About.module.scss';

function About(): JSX.Element {
	const { theme } = useContext(AppThemeContext);

	return (
		<div className={!theme ? 'dark' : ''}>
			<div className='top-container dark:top-container-dark'>
				<HeadTag title='About' />
				<h1>About Page</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
					voluptas totam voluptates exercitationem vero eius doloribus
					repellendus ipsam fugiat numquam nesciunt unde quia, sequi, autem amet
					commodi quo facilis necessitatibus!
				</p>
			</div>
		</div>
	);
}

export default About;
