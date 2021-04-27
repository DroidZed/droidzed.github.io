import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
	href: string;
	title: string;
	body: string;
	icon: IconDefinition;
}

const Card: React.FC<Props> = (props) => {
	return (
		<div className='card'>
			<a target='_blank' href={props.href}>
				<h3>{props.title} &rarr;</h3>
				<p>
					{' '}
					Find me on {props.body}.
					<FontAwesomeIcon icon={props.icon} className='text-xs' />
				</p>
			</a>
		</div>
	);
};

export default Card;
