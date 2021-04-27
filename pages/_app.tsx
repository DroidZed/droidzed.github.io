import React from 'react';
import { ThemeWrapper } from '../store/themeStore';
import '../styles/globals.css';

function App({ Component, pageProps }: { Component: any; pageProps: any }) {
	return (
		<ThemeWrapper>
			<Component {...pageProps} />
		</ThemeWrapper>
	);
}

export default App;
