import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
	title: string;
	icon: IconDefinition;
	href: string;
}

const ExternalLinkCard: React.FC<Props> = (props) => {
	return (
		<div className='card'>
			<a target='_blank' href={props.href}>
				<div className='grid place-items-center'>
					<div>{props.title}</div>
					<div>
						<FontAwesomeIcon icon={props.icon} size='3x' />
					</div>
				</div>
			</a>
		</div>
	);
};

export default ExternalLinkCard;
