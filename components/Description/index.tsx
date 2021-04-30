import React, { useContext } from 'react';
import { AppThemeContext } from '../../store/themeStore';

const Description: React.FC = () => {
	const { theme, handleChangeTheme } = useContext(AppThemeContext);

	return (
		<p className='description'>
			The future version of my{' '}
			<code
				onClick={() => {
					document.getElementById('darkBody')?.classList.toggle('dark');
					handleChangeTheme(!theme);
				}}
				className='code dark:text-black'>
				Sanctuary
			</code>{' '}
			but with a little extra spice !
		</p>
	);
};

export default Description;
