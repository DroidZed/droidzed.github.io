import React from 'react';
import Head from 'next/head';

interface Props {
	title?: string;
}

const HeadTag: React.FC<Props> = (props) => {
	return (
		<Head>
			<title>● Sanctuary ●{` | ${props.title}`}</title>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1, shrink-to-fit=no'
			/>
			<meta
				name='google-site-verification'
				content='J5tfFdlGdM5ApvAHEsMg-CBPSyJv6wHdEtP45wMxEPU'
			/>
			<meta name='twitter:card' content='summary' />
			<meta name='twitter:site' content='@Droid7ed' />
			<meta name='twitter:creator' content='@Droid7ed' />
			<meta property='og:url' content='https://droidzed.me' />
			<meta property='og:title' content='Personal Website' />
			<meta
				property='og:description'
				content='Sanctuary of DroidZed, my personal website and portfolio. Come check it out and discover more about my world.'
			/>
			<meta property='og:image' content='https://www.droidzed.me/favicon.png' />
			<meta name='description' content='Personal website' />
			<meta name='keywords' content='website,personal' />
			<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
			<link rel='icon' href='/favicon.png' />
		</Head>
	);
};

export default HeadTag;
