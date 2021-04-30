import React, { useContext } from 'react';
import HeadTag from '../../components/HeadTag';
import { AppThemeContext } from '../../store/themeStore';

import styles from './Portfolio.module.scss';

export default function Portfolio(): JSX.Element {
	const { theme } = useContext(AppThemeContext);
	return (
		<div className={!theme ? 'dark' : ''}>
			<div className='top-container dark:top-container-dark'>
				<HeadTag />
				<h1>Portfolio</h1>
			</div>
		</div>
	);
}
