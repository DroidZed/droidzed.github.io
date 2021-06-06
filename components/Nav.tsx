import React from "react";

import Link from "next/link";
import NavItem from "./NavItem";

const Nav: React.FC = () => {
	return (
		<div className="flex felex-column justify-between items-center mt-5">
			<NavItem title="About" href="#" />
			<NavItem title="Socials" href="#" />
			<NavItem title="Portfolio" href="#" />
			<NavItem title="Contact" href="#" />
		</div>
	);
};

export default Nav;
