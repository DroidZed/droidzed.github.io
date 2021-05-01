import React, { useContext } from 'react';
import { AppThemeContext } from '../store/themeStore';

const TopContainer: React.FC = ({ children }) => {
	const { theme } = useContext(AppThemeContext);

	return (
		<div className={!theme ? 'dark' : ''}>
			<div className='centered-flex-col min-h-screen py-0 px-2 dark:bg-black dark:text-white'>
				<main className='flex-1 py-20 px-0 centered-flex-col '>{children}</main>
			</div>
		</div>
	);
};

export default TopContainer;
