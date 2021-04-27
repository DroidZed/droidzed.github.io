import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Props } from './Props';

const ExternalLinkCard: React.FC<Props> = (props) => {
	return (
		<div
			id={props.cardType}
			className={
				props.cardType == 'Reddit'
					? 'card orangeBoxShadow'
					: 'card blueBoxShadow'
			}>
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
