import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

import Config from '../../core/Config';
import { getToken } from '../../core/Utils';

export const parseUrl = (url: string) => `${Config.VITE_BASE_URL}/${url}`;

export const commonFetchBaseQuery = (model: string) => ({
	baseQuery: fetchBaseQuery({
		baseUrl: parseUrl(model),
		credentials: "include",
		prepareHeaders(headers, api) {
			headers.set("x_api_key", Config.VITE_API_KEY);
		},
	}),
});
