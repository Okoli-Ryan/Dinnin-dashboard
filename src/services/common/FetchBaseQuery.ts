import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

import { API_KEY, BASE_URL } from "../../core/Constants";
import { getToken } from "../../core/Utils";

export const commonFetchBaseQuery = (model: string, AuthorizationHeader?: boolean) => ({
	baseQuery: fetchBaseQuery({
		baseUrl: `${BASE_URL}/${model}`,
		prepareHeaders(headers, api) {
			headers.set("x-api-key", API_KEY);
			AuthorizationHeader && headers.set("Authorization", `Bearer ${getToken()}`);
		},
	}),
});
