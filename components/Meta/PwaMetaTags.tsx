import React from 'react'

const PwaMetaTags:React.FC = () => {
    return (
        <>
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
        </>
    )
}

export default PwaMetaTags;