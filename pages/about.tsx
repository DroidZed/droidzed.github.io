import axios, { AxiosResponse } from 'axios';
import React from 'react';
import HeadTag from '../components/HeadTag';
import TopContainer from '../components/TopContainer';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

type DRZ = {
	fullName: string;
	dob: Dob;
	paragraph: string;
	origin: string;
	hobbies: string[];
};

type Dob = {
	day: number;
	month: number;
	year: number;
};

export default function About({
	me,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<TopContainer>
			<HeadTag title='About' />
			<h1>About Page</h1>
			<div>
				<div>
					<p>{me.origin}</p>
				</div>
				<div>
					<img
						width={100}
						height={100}
						src='https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg'
						alt='tunisian flag'
					/>
				</div>
			</div>
		</TopContainer>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	let resp: AxiosResponse<DRZ> = await axios.get(
		'https://gist.githubusercontent.com/DroidZed/4a2ee28c40cf35d39ebdd7c44b4746ab/raw/fd16a3ee3ee6aaba34380d080634978ea5e0ab18/me.json'
	);

	const me = resp.data;

	return {
		props: { me },
		revalidate: 1,
	};
};
