export const GTM_ID = process.env.GTM_ID_STRING;

//@ts-ignore
export const GTMPageView = (url) => {
	//@ts-ignore
	window.dataLayer.push({
		event: 'pageview',
		page: url,
	});
};
