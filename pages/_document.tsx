import React from "react";

import Document, { Html, Head, Main, NextScript } from "next/document";
import { GTM_ID } from "../utils/gtm";

export default class SiteDocument extends Document {

	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}


	render() {
		return (
			<Html>
				<Head>
					<script
						dangerouslySetInnerHTML={{
							__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','${GTM_ID}');`,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<noscript>
						<iframe
							src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
							height="0"
							width="0"
							style={{ display: 'none', visibility: 'hidden' }}
						/>
					</noscript>

				</body>
			</Html >
		);
	}
}
