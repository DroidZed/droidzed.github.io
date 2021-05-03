import axios, { AxiosResponse } from 'axios';
import React from 'react';
import HeadTag from '../components/HeadTag';
import TopContainer from '../components/TopContainer';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import InfoCard from '../components/InfoCard';
import { DRZ } from '../types/me';

export default function About({
	me,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<TopContainer>
			<HeadTag title='About' />
			<h1>About Page</h1>
			<div>
				<InfoCard info={me} />
			</div>
		</TopContainer>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	let resp: AxiosResponse<DRZ> = await axios.get(
		'https://gist.githubusercontent.com/DroidZed/4a2ee28c40cf35d39ebdd7c44b4746ab/raw/7aba0c82307ce202b5b7230d6481fa898ec22a0f/me.json'
	);

	return {
		props: { me: resp.data },
		revalidate: 1,
	};
};
