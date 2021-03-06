import React from "react";

const TopContainer: React.FC = ({ children }) => {
	return (
		<div className="min-h-screen max-w-screen dark:bg-black dark:text-white">
			{children}
		</div>
	);
};

export default TopContainer;
