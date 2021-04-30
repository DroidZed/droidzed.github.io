import React, { useContext } from 'react';
import { AppThemeContext } from '../../store/themeStore';

import styles from './Description.module.scss';

const Description: React.FC = () => {
	const { theme, handleChangeTheme } = useContext(AppThemeContext);

	return (
		<p className={styles.description}>
			The future version of my{' '}
			<code
				onClick={() => {
					document.getElementById('darkBody')?.classList.toggle('dark');
					handleChangeTheme(!theme);
				}}
				className={`${styles.code} dark:text-black`}
			>
				Sanctuary
			</code>{' '}
			but with a little extra spice !
		</p>
	);
};

export default Description;
