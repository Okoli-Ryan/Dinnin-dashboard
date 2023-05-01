import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

import { API_KEY, BASE_URL } from "../../core/Constants";

export const commonFetchBaseQuery = (model: string) => ({
	baseQuery: fetchBaseQuery({
		baseUrl: `${BASE_URL}/${model}`,
		prepareHeaders(headers, api) {
			headers.set("x-api-key", API_KEY);
		},
	}),
});
