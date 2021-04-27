import React from 'react';
import HeadTag from '../components';
import Description from '../components/Description';
import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Title from '../components/Ttitle';

const Home: React.FC = (props) => {
	return (
		<div className='dark' id='darkBody'>
			<HeadTag />
			<div className='top-container dark:top-container-dark'>
				<Title />
				<Description />
				<Grid />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
