import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

import Config from "../../core/Config";
import { getToken } from "../../core/Utils";

export const commonFetchBaseQuery = (model: string, AuthorizationHeader?: boolean) => ({
	baseQuery: fetchBaseQuery({
		baseUrl: `${Config.VITE_BASE_URL}/${model}`,
		prepareHeaders(headers, api) {
			headers.set("x-api-key", Config.VITE_API_KEY);
			AuthorizationHeader && headers.set("Authorization", `Bearer ${getToken()}`);
		},
	}),
});
