import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

interface Props {
	title: string;
	icon: IconDefinition;
	href: string;
}

const Card: React.FC<Props> = (props) => {
	return (
		<div className='card'>
			<Link href={props.href}>
				<a>
					<div className='grid place-items-center'>
						<div>{props.title}</div>
						<div className='text-center'>
							<span>
								<FontAwesomeIcon icon={props.icon} size='3x' />
							</span>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default Card;
