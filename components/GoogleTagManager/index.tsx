import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtm from '../../utils/gtm';

const GoogleTagManager = ({ children }: any) => {
	const router = useRouter();

	useEffect(() => {
		router.events.on('routeChangeComplete', gtm.GTMPageView);
		return () => {
			router.events.off('routeChangeComplete', gtm.GTMPageView);
		};
	}, [router.events]);

	return children;
};

export default GoogleTagManager;
