import React from 'react';
import Head from 'next/head';

interface Props {
	title?: string;
}

const HeadTag: React.FC<Props> = (props) => {
	return (
		<Head>
			<title>● Sanctuary ●{` | ${props.title}`}</title>
			<link rel='icon' href='/favicon.png' />
			<meta name='keywords' content='website,personal,sanctuary' />
			<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
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
			<meta property='og:title' content={`𝕯𝖗𝖔𝖎𝖉𝖅𝖊𝖉'𝖘 𝕯𝖔𝖒𝖆𝖎𝖓`} />
			<meta property='og:url' content={`https://droidzed.me${props.title}`} />
			<meta property='og:type' content='website' />
			<meta
				property='og:description'
				content='Sanctuary of DroidZed, my personal website and portfolio. Come check it out and discover more about my world.'
			/>
			<meta property='og:image' content='http://www.droidzed.me/favicon.png' />
			<meta
				property='og:image:url'
				content='https://www.droidzed.me/favicon.png'
			/>
			<meta property='og:image:alt' content='sanctuary icon' />
			<meta property='og:image:type' content='image/png' />
			<meta property='og:image:width' content='1042' />
			<meta property='og:image:height' content='1058' />
			<meta
				property='og:image:secure_url'
				content='https://www.droidzed.me/favicon.png'
			/>
			<meta
				name='description'
				content='Sanctuary of DroidZed, my personal website and portfolio. Come check it out and discover more about my world.'
			/>
		</Head>
	);
};

export default HeadTag;
