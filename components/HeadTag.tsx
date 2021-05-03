import React from "react";
import Head from "next/head";
import TwitterMetaTags from "./Meta/TwitterMetaTags";
import OgMetaTags from "./Meta/OgMetaTags";
import PwaMetaTags from "./Meta/PwaMetaTags";
import NormalHTMLMetaTags from "./Meta/NormalHTMLMetaTags";
import { PageTitleProps } from "./Meta/PageTitleProps";
import { GSV_ID } from "../utils/gtm";

const HeadTag: React.FC<PageTitleProps> = ({ title }) => {
	return (
		<Head>
			<PwaMetaTags />
			<NormalHTMLMetaTags />
			<title>Aymen Dhahri{` | ${title}`}</title>
			<meta name="google-site-verification" content={`${GSV_ID}`} />
			<TwitterMetaTags />
			<OgMetaTags title={title} />
		</Head>
	);
};

export default HeadTag;
