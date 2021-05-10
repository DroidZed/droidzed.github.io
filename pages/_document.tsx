import React from 'react';

import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class SiteDocument extends Document {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html dir='ltr' lang='en' prefix='og: https://ogp.me/ns#'>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
