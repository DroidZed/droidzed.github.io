import React from "react";

const SpotifyWidget: React.FC = () => {
	return (
		<div>
			<iframe
				src="https://open.spotify.com/embed/user/9jib0d4osau56gxt26y8oca6h/playlist/5xJz9sa1bCLnlbjLgntbPd"
				width="300"
				height="380"
				frameBorder="0"
				allowTransparency={true}
				allow="encrypted-media"
			></iframe>
		</div>
	);
};

export default SpotifyWidget;
