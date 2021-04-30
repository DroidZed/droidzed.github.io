import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Props } from '../Props';

const Card: React.FC<Props> = (props) => {
	return (
		<div className={`card ${props.shadowColor}Shadow`}>
			<div className='grid place-items-center'>
				<p>{props.title}</p>
				<span>
					<FontAwesomeIcon icon={props.icon} size='3x' />
				</span>
			</div>
		</div>
	);
};

export default Card;
