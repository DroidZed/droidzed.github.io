import React, { useContext } from 'react';
import { AppThemeContext } from '../store/themeStore';

const Footer: React.FC = () => {
	const { theme } = useContext(AppThemeContext);

	return (
		<footer className='footer'>
			<a
				href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
				target='_blank'
				rel='noopener noreferrer'>
				Powered by{' '}
				<img
					src={'/vercel' + (!theme ? '.dark' : '') + '.svg'}
					alt='Vercel Logo'
					className='logo'
				/>
			</a>
		</footer>
	);
};

export default Footer;
