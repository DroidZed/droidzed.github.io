import React from 'react';

const TopContainer: React.FC = ({ children }) => {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen py-0 px-2 dark:bg-black dark:text-white'>
			{children}
		</div>
	);
};

export default TopContainer;
