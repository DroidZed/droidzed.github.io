import Link from 'next/link';
import React, { useContext } from 'react';
import { AppThemeContext } from '../store/themeStore';
import HeadTag from '../components/HeadTag';

export default function FourOhFour() {
	const { theme } = useContext(AppThemeContext);
	return (
		<div className={!theme ? 'dark' : ''}>
			<div className='top-container dark:top-container-dark'>
				<HeadTag title='Page Not Found' />
				<h1>404 - Page Not Found</h1>
				<Link href='/'>
					<a>Go back home</a>
				</Link>
			</div>
		</div>
	);
}
