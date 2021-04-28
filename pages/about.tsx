import Link from 'next/link';
import React, { useContext } from 'react';
import HeadTag from '../components/HeadTag';
import { AppThemeContext } from '../store/themeStore';

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
				<Link href='/'>
					<a>Back to home page !</a>
				</Link>
			</div>
		</div>
	);
}

export default About;
