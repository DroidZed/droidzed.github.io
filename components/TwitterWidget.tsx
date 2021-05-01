import React from 'react';

const TwitterWidget: React.FC = (props) => {
	return (
		<div>
			<a
				className='twitter-timeline'
				data-width='400'
				data-height='500'
				data-theme='dark'
				href='https://twitter.com/Droid7ed?ref_src=twsrc%5Etfw'>
				Tweets by Droid7ed
			</a>{' '}
			<script
				async
				src='https://platform.twitter.com/widgets.js'
				charSet='utf-8'></script>
		</div>
	);
};

export default TwitterWidget;
