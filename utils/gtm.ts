export const GTM_ID = process.env.GTM_ID_STRING;

export const GSV_ID = process.env.GSV_ID;

//@ts-ignore
export const GTMPageView = (url) => {
	//@ts-ignore
	window.dataLayer.push({
		event: "pageview",
		page: url,
	});
};
