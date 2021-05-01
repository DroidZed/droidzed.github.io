import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Props {
	title: string;
	icon: IconDefinition;
	textColor: string;
}

const Card: React.FC<Props> = (props) => {
	return (
		<div
			style={{
				boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
				transition: 'color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
				flexBasis: '45%',
			}}
			className={`grid place-items-center w-max text-left no-underline m-4 p-12 ${props.textColor} `}
		>
			<p className='m-0 text-xl leading-normal'>{props.title}</p>
			<span>
				<FontAwesomeIcon icon={props.icon} size='3x' />
			</span>
			<style jsx>
				{`
					.beautifulBlue:active,
					.beautifulBlue:focus,
					.beautifulBlue:hover {
						color: #0070f3;
						box-shadow: rgba(6, 128, 220, 0.2) 0px 7px 29px 0px !important;
					}

					.bloodOrange:hover,
					.bloodOrange:focus,
					.bloodOrange:active {
						color: #ff4500;
						box-shadow: rgba(255, 69, 0, 0.2) 0px 7px 29px 0px !important;
					}

					.goldenSun:hover,
					.goldenSun:focus,
					.goldenSun:active {
						color: #ffd700;
						box-shadow: rgba(255, 215, 0, 0.2) 0px 7px 29px 0px !important;
					}
				`}
			</style>
		</div>
	);
};

export default Card;
