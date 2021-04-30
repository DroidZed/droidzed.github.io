import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Props } from '../Props';

import styles from './Card.module.css';

const Card: React.FC<Props> = (props) => {
	return (
		<div className={`${styles.card} ${props.textColor} ${props.shadowColor}`}>
			<div className='grid place-items-center'>
				<p className="m-0 text-xl leading-normal">{props.title}</p>
				<span>
					<FontAwesomeIcon icon={props.icon} size='3x' />
				</span>
			</div>
		</div>
	);
};

export default Card;
