import React from "react";
import HeadTag from "../components/HeadTag";
import DiscordWidget from "../components/DiscordWidget";
import YouTubeWidget from "../components/YouTubeWidget";

import TopContainer from "../components/TopContainer";
import HeaderText from "../components/HeaderText";

export default function Socials() {
	return (
		<TopContainer>
			<HeadTag title="Socials" />
			<div>
				<HeaderText>𝓢𝓸𝓬𝓲𝓪𝓵𝓼</HeaderText>
				<div>
					<DiscordWidget />
					<YouTubeWidget />
				</div>
			</div>
		</TopContainer>
	);
}
