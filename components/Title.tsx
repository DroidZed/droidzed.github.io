import React from 'react';

const Title: React.FC = () => {
	return (
		<div>
			<h1
				className='m-0 leading-xs text-center'
				style={{ lineHeight: 1.3, fontSize: '4rem' }}
			>
				𝕯𝖗𝖔𝖎𝖉𝖅𝖊𝖉'𝖘{' '}
				<a
					className='no-underline text-beautifulBlue hover:underline focus:underline active:underline'
					href='https://nextjs.org'
				>
					𝕹𝖊𝖝𝖙.𝖏𝖘 𝖘𝖎𝖙𝖊!
				</a>
			</h1>
		</div>
	);
};

export default Title;
