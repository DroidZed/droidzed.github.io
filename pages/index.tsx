import React, { useContext } from 'react';
import Description from '../components/Description';
import Grid from '../components/Grid';
import HeadTag from '../components/HeadTag';
import Title from '../components/Title';
import { AppThemeContext } from '../store/themeStore';

function Home() {
	const { theme } = useContext(AppThemeContext);

	return (
		<div className={!theme ? 'dark' : ''} id='darkBody'>
			<div className='centered-flex top-container dark:top-container-dark'>
				<HeadTag title='Home' />
				<Title />
				<Description />
				<Grid />
			</div>
		</div>
	);
}

export default Home;
