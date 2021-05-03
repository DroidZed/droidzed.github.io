import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { DRZ } from '../types/me';
import axios from 'axios';

interface InfoCardProps {
	info: DRZ;
}

const InfoCard: React.FC<InfoCardProps> = ({ info }) => {
	const [githubCrawl, setGitHubCrawl] = useState<any>({});

	const getDataFromGitHub = async (username: string) => {
		const req = await axios.get(`https://api.github.com/users/${username}`);

		const json = req.data;

		setGitHubCrawl(json);
	};

	useEffect(() => {
		getDataFromGitHub(info.userName);
	}, []);

	return (
		<div>
			<div>
				<div>{info.fullName}</div>
				<div>
					{githubCrawl['avatar_url'] != undefined ? (
						<Image
							width={100}
							height={100}
							src={githubCrawl['avatar_url']} // TODO: fix this !
							alt='profile picture'
							quality={100}
						/>
					) : (
						<img
							width={100}
							height={100}
							src={githubCrawl['avatar_url']} // TODO: fix this !
							alt='profile picture'
						/>
					)}
				</div>
				<div>
					<Image
						width={100}
						height={100}
						src='/images/Flag_of_Tunisia.svg'
						alt='tunisian flag'
						quality={100}
					/>
				</div>
			</div>
		</div>
	);
};

export default InfoCard;
