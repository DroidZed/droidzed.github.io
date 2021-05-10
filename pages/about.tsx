import { AxiosResponse } from "axios";
import get from "axios";
import React from "react";
import HeadTag from "../components/HeadTag";
import TopContainer from "../components/TopContainer";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import InfoCard from "../components/InfoCard";
import { DRZ } from "../types/DRZ";

export default function About({
	me,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<TopContainer>
			<div className="flex-col">
				<HeadTag title="About" />
				<div>
					<InfoCard info={me} />
				</div>
			</div>
		</TopContainer>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	let resp: AxiosResponse<DRZ> = await get(
		"https://gist.githubusercontent.com/DroidZed/4a2ee28c40cf35d39ebdd7c44b4746ab/raw/84da9a918e4996398287bc697286b8b8083e344a/me.json"
	);

	return {
		props: { me: resp.data },
		revalidate: 1,
	};
};
