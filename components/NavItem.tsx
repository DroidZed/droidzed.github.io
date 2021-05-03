import React, { MouseEventHandler } from 'react';
import { useRouter } from 'next/router';

interface NavItemProps {
	children?: React.ReactNode;
	href: string;
	title: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, title }) => {
	const router = useRouter();

	const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
		e.preventDefault();
		router.push(href);
	};

	return (
		<div className='mx-5'>
			<a href={href} target='_blank' onClick={handleClick}>
				{title}
			</a>
		</div>
	);
};

export default NavItem;
