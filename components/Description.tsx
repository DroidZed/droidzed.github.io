import React, { useContext } from 'react';
import { AppThemeContext } from '../store/themeStore';

const Description: React.FC = () => {
	const { theme, handleChangeTheme } = useContext(AppThemeContext);

	return (
		<p className='text-center text-2xl leading-normal'>
			The future version of my{' '}
			<code
				className='bg-whiteSmokeLight p-3 cursor-pointer dark:text-black'
				style={{
					fontFamily: 'Lucida Console',
					fontSize: '1.1rem',
					borderRadius: '5px',
				}}
				onClick={() => {
					document.getElementById('darkBody')?.classList.toggle('dark');
					handleChangeTheme(!theme);
				}}
			>
				Sanctuary
			</code>{' '}
			but with a little extra spice !
		</p>
	);
};

export default Description;
