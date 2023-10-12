import Config from '@/core/Config';

export function ParseRestaurantUrl(slug: string, code?: string) {
	const url = new URL(Config.VITE_USER_CLIENT_URL);
	url.pathname = `/${slug}`;
	if (code) {
		url.searchParams.set("code", code);
	}

	return url.toString();
}
