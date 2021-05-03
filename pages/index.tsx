import React from 'react';
import Description from '../components/Description';
import HeadTag from '../components/HeadTag';
import Nav from '../components/Nav';
import Title from '../components/Title';
import TopContainer from '../components/TopContainer';

export default function Home() {
	return (
		<TopContainer>
			<HeadTag title='Home' />
			<Title />
			<Description />
			<Nav />
		</TopContainer>
	);
}
