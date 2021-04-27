import React from 'react';
import Head from 'next/head';

const HeadTag: React.FC = () => {
	return (
		<Head>
			<title>● Sanctuary ●</title>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1, shrink-to-fit=no'
			/>
			<meta name='author' content='Aymen Dhahri' />
			<meta name='description' content='Personal website' />
			<meta name='keywords' content='website,personal' />
			<meta charSet='utf-8' />
			<link rel='icon' href='/favicon.png' />
		</Head>
	);
};

export default HeadTag;
