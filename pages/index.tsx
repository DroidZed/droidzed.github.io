import React from "react";
import HeadTag from "../components/HeadTag";
import Nav from "../components/Nav";
import Title from "../components/Title";
import TopContainer from "../components/TopContainer";

export default function Home() {
	return (
		<TopContainer>
			<div className="flex flex-col justify-center items-center w-100">
				<HeadTag title="Home" />
				<Title />
				<Nav />
			</div>
		</TopContainer>
	);
}
