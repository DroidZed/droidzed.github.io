import React from 'react';
import { ThemeWrapper } from '../store/themeStore';
import '../styles/globals.css';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

function App({ Component, pageProps }: { Component: any; pageProps: any }) {
	return (
		<ThemeWrapper>
			<Component {...pageProps} />
		</ThemeWrapper>
	);
}

export default App;
