import React from 'react';

import Link from 'next/link';

import HeadTag from '../components/HeadTag';
import TopContainer from '../components/TopContainer';

export default function FourOhFour() {
	return (
		<TopContainer>
			<HeadTag title='Page Not Found' />
			<h1>404 - Page Not Found</h1>
			<Link href='/'>
				<a>Go back home</a>
			</Link>
		</TopContainer>
	);
}
