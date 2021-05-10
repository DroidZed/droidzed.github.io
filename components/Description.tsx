import { faMoon as fasMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Description: React.FC = () => {
	return (
		<p className="text-center text-2xl leading-normal">
			The future version of my{" "}
			<code
				className="bg-whiteSmokeLight p-3 cursor-pointer dark:text-black"
				style={{
					fontFamily: "Lucida Console",
					fontSize: "1.1rem",
					borderRadius: "5px",
				}}
			>
				<span>Sanctuary</span> <FontAwesomeIcon icon={fasMoon} />
			</code>{" "}
			but with a little extra spice !
		</p>
	);
};

export default Description;
