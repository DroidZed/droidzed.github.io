import React from "react";
import Head from "next/head";
import { GSV_ID } from "../utils/vars";
export interface PageTitleProps {
	title?: string;
}

const HeadTag: React.FC<PageTitleProps> = ({ title }) => {
	return (
		<Head>
			{/* PWA tags */}
			<link rel="manifest" href="/manifest.json" />
			<meta name="theme-color" content="#5b05bb" />
			<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			<link href='/images/icons/maskable_icon_x48.png' rel='icon' type='image/png' sizes='48x48' />
			<link href='/images/icons/maskable_icon_x72.png' rel='icon' type='image/png' sizes='72x72' />
			<link href='/images/icons/maskable_icon_x96.png' rel='icon' type='image/png' sizes='96x96' />
			<link href='/images/icons/maskable_icon_x128.png' rel='icon' type='image/png' sizes='128x128' />
			<link href='/images/icons/maskable_icon_x192.png' rel='icon' type='image/png' sizes='192x192' />
			<link href='/images/icons/maskable_icon_x384.png' rel='icon' type='image/png' sizes='384x384' />
			<link href='/images/icons/maskable_icon_x512.png' rel='icon' type='image/png' sizes='512x512' />
			<link href='/images/icons/maskable_icon_x1200.png' rel='icon' type='image/png' sizes='1200x1200' />
			<link rel="apple-touch-icon" href="/images/icons/apple-touch-icon.png"></link>
			{/* Normal tags */}
			<link rel="icon" href="/images/favicon.png" />
			<link rel="canonical" href="https://www.droidzed.me" />
			<meta name="description" content="Sanctuary of DroidZed, my personal website and portfolio. Come check it out and discover more about my world." />
			<meta name="keywords" content="website,personal,sanctuary" />
			<meta name="robots" content="index,follow" />
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<title>Aymen Dhahri{` | ${title}`}</title>
			<meta name="google-site-verification" content={`${GSV_ID}`} />
			{/* Twitter tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@Droid7ed" />
			<meta name="twitter:title" content="𝕯𝖗𝖔𝖎𝖉𝖅𝖊𝖉'𝖘 𝕯𝖔𝖒𝖆𝖎𝖓" />
			<meta name="twitter:creator" content="@Droid7ed" />
			<meta name="twitter:image" content="https://i.imgur.com/pLcrVSn.png" />
			<meta name="twitter:domain" content="droidzed.me" />
			{/* OpenGraph tags */}
			<meta property='og:title' content="𝕯𝖗𝖔𝖎𝖉𝖅𝖊𝖉'𝖘 𝕯𝖔𝖒𝖆𝖎𝖓"/>
			<meta property='og:url' content={`https://droidzed.me${title != 'Home' ? '/' + title : ''}`}/>
			<meta property='og:type' content='website'/>
			<meta property='og:description' content='Sanctuary of DroidZed, my personal website and portfolio. Come check it out and discover more about my world.'/>
			<meta property='og:site_name' content="𝕯𝖗𝖔𝖎𝖉𝖅𝖊𝖉'𝖘 𝕯𝖔𝖒𝖆𝖎𝖓"/>
			<meta property='og:image' content='http://www.droidzed.me/sanctuary_1200.png'/>
			<meta property='og:image:secure' content='https://i.imgur.com/pLcrVSn.png'/>
			<meta property='og:image:alt' content='sanctuary icon'/>
			<meta property='og:image:type' content='image/png'/>
			<meta property='og:image:width' content='1042'/>
			<meta property='og:image:height' content='1058'/>
			{/* Pinterest tag */}
			<meta name="p:domain_verify" content="082cc8331c64457b39091625c8637f17"/>
		</Head>
	);
};

export default HeadTag;
