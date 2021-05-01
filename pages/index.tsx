import React from 'react';
import Description from '../components/Description';
import Grid from '../components/Grid';
import HeadTag from '../components/HeadTag';
import Title from '../components/Title';
import TopContainer from '../components/TopContainer';

export default function Home() {
	return (
		<TopContainer>
			<HeadTag title='Home' />
			<Title />
			<Description />
			<Grid />
		</TopContainer>
	);
}
