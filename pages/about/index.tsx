import axios from 'axios';
import React from 'react';
import HeadTag from '../components/HeadTag';
import TopContainer from '../components/TopContainer';

export default function About() {
	return (
		<TopContainer>
			<HeadTag title='About' />
			<h1>About Page</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
				voluptas totam voluptates exercitationem vero eius doloribus repellendus
				ipsam fugiat numquam nesciunt unde quia, sequi, autem amet commodi quo
				facilis necessitatibus!
			</p>
		</TopContainer>
	);
}

export async function getStaticProps() {
	let data = {};

	axios(
		'https://gist.githubusercontent.com/DroidZed/4a2ee28c40cf35d39ebdd7c44b4746ab/raw/fd16a3ee3ee6aaba34380d080634978ea5e0ab18/me.json'
	).then((resp) => {
		data = resp.data;
	});

	console.log(data);

	return {
		props: { ...data }, // will be passed to the page component as props
	};
}
