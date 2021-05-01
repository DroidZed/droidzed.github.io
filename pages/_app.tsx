import React from 'react';
import { AppProps } from 'next/app';
import { ThemeWrapper } from '../store/themeStore';
import '../styles/globals.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import GoogleTagManager from '../components/GoogleTagManager';

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeWrapper>
			<GoogleTagManager>
				<Component {...pageProps} />
			</GoogleTagManager>
		</ThemeWrapper>
	);
}
