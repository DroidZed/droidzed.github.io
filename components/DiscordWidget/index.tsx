import React from 'react';

const DiscordWidget: React.FC = (props) => {
	const discordEmbed = `<iframe
    src='https://discord.com/widget?id=696838752600981534&theme=dark'
    width='350'
    height='500'
    allowtransparency='true'
    frameborder='0'
    sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'></iframe>
`;

	return <div dangerouslySetInnerHTML={{ __html: discordEmbed }}></div>;
};

export default DiscordWidget;
