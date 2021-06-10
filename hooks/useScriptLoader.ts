import { useEffect } from "react";

const useScriptLoader = (url: string) => {
	useEffect(() => {
		const script = document.createElement("script");

		script.src = url;
		script.async = true;

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, [url]);
};

export default useScriptLoader;
