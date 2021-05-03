import React from "react";
import { PageTitleProps } from "./PageTitleProps";

const NormalHTMLMetaTags: React.FC<PageTitleProps> = ({ title }) => {
	return (
		<>
			<title>Aymen Dhahri{` | ${title}`}</title>
			<link rel="icon" href="/images/favicon.png" />
			<link rel="canonical" href="https://www.droidzed.me" />
			<meta
				name="description"
				content="Sanctuary of DroidZed, my personal website and portfolio. Come check it out and discover more about my world."
			/>
			<meta name="keywords" content="website,personal,sanctuary" />
			<meta name="robots" content="index,follow" />
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>
		</>
	);
};

export default NormalHTMLMetaTags;
