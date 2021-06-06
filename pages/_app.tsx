import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { ThemeWrapper } from "../store/themeStore";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import AOS from "aos";

import "tailwindcss/tailwind.css";

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => AOS.init(), []);

	return (
		<ThemeWrapper>
			<Component {...pageProps} />
		</ThemeWrapper>
	);
}
