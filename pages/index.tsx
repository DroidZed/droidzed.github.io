import { faReddit, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import React, { useState } from 'react';

export default function Home(): JSX.Element {
	const [dark, setDark] = useState(false);

	return (
		<div className='dark' id='darkBody'>
			<div className='top-container dark:top-container-dark'>
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

				<main className='main'>
					<h1 className='title'>
						DroidZed's <a href='https://nextjs.org'>Next.js site!</a>
					</h1>

					<p className='description'>
						The future version of my{' '}
						<code
							onClick={() => {
								document.getElementById('darkBody')?.classList.toggle('dark');
								setDark(!dark);
							}}
							className='code dark:code-dark'>
							Sanctuary
						</code>{' '}
						but with a little extra spice !
					</p>

					<div className='grid'>
						<div className='card'>
							<a target='_blank' href='https://www.twitter.com/Droid7ed'>
								<h3>Twitter &rarr;</h3>
								<p>
									{' '}
									Find me on twitter.
									<FontAwesomeIcon icon={faTwitter} className='text-xs' />
								</p>
							</a>
						</div>
						<div className='card'>
							<a target='_blank' href='https://reddit.com/u/DroidZed'>
								<h3>u/DroidZed &rarr;</h3>
								<p>
									{' '}
									Find me on reddit.
									<FontAwesomeIcon icon={faReddit} size='1x' />
								</p>
							</a>
						</div>
					</div>
				</main>

				<footer className='footer'>
					<a
						href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'>
						Powered by{' '}
						<img
							src={'/vercel' + (!dark ? '.dark' : '') + '.svg'}
							alt='Vercel Logo'
							className='logo'
						/>
					</a>
				</footer>
			</div>
		</div>
	);
}
