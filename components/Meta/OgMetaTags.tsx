import React from 'react'
import { PageTitleProps } from './PageTitleProps';

const OgMetaTags: React.FC<PageTitleProps>  = ({title}) => {
    return (
        <>
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
            
        </>
    )
}

export default OgMetaTags;