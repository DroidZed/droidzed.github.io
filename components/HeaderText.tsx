import React from "react";

const HeaderText: React.FC = ({ children }) => {
	return (
		<div>
			<p className="text-6xl text-center mb-10">{children}</p>
		</div>
	);
};

export default HeaderText;
