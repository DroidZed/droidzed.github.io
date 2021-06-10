import React from "react";

import Link from "next/link";
import NavItem from "./NavItem";

const Nav: React.FC = () => {
	return (
		<div className="flex felex-column justify-between items-center mt-5">
			<NavItem title="About" href="/about" />
			<NavItem title="Socials" href="/socials" />
			<NavItem title="Portfolio" href="/portfolio" />
			<NavItem title="Contact" href="/contact" />
		</div>
	);
};

export default Nav;
