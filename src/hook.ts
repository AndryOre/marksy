import type { Reroute } from '@sveltejs/kit';

export const reroute: Reroute = ({ url }) => {
	const hostname = url.hostname;

	if (hostname.endsWith('.localhost')) {
		const username = hostname.split('.')[0];

		if (url.pathname.startsWith(`/${username}`)) {
			return;
		}

		if (url.pathname.includes('/api')) {
			return;
		}

		return `/${username}${url.pathname}`;
	}

	if (hostname.endsWith('.marksy.co')) {
		const username = hostname.split('.')[0];

		if (url.pathname.startsWith(`/${username}`)) {
			return;
		}

		if (url.pathname.includes('/api')) {
			return;
		}

		return `/${username}${url.pathname}`;
	}
};
