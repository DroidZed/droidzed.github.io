import React, { useEffect, useState } from "react";
import Image from "next/image";
import { DRZ } from "../types/DRZ";
import axios from "axios";

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
		<div className="dark:bg-deathGray border-solid flex rounded-2xl p-4 flex-1 text-justify shadow-cardShadow">
			<div>
				<div>{info.fullName}</div>
				<div>
					{githubCrawl["avatar_url"] != undefined ? (
						<Image
							width={100}
							height={100}
							src={githubCrawl["avatar_url"]}
							alt="profile picture"
							quality={100}
						/>
					) : (
						<img
							width={100}
							height={100}
							src={githubCrawl["avatar_url"]}
							alt="profile picture"
						/>
					)}
				</div>
				<div>
					<p>{info.paragraph}</p>
				</div>
				<div>
					<h2>Hobbies :</h2>
					<ul>
						{info.hobbies?.map((hob) => (
							<li key={info.hobbies?.indexOf(hob)}>{hob}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default InfoCard;
