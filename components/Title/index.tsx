import React from 'react';
import styles from './Title.module.css';

const Title: React.FC = () => {
	return (
		<div>
			<h1 className={styles.title}>
				𝕯𝖗𝖔𝖎𝖉𝖅𝖊𝖉'𝖘 <a href='https://nextjs.org'>𝕹𝖊𝖝𝖙.𝖏𝖘 𝖘𝖎𝖙𝖊!</a>
			</h1>
		</div>
	);
};

export default Title;
