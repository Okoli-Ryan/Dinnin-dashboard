import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

import Config from "../../core/Config";

export const parseUrl = (url?: string) => `${Config.VITE_BASE_URL}${url?.startsWith("/") ? url : `/${url}`}`;
export const ApiBaseUrl =
	(base?: string) =>
	(url: string = "/") =>
		parseUrl(base) + (url?.startsWith("/") ? url : `/${url}`);
export const commonFetchBaseQuery = (model: string) => ({
	baseQuery: fetchBaseQuery({
		baseUrl: parseUrl(model),
	}),
	reducerPath: `${model}Api`,
});

const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
	const result = await fetchBaseQuery({
		baseUrl: Config.VITE_BASE_URL,
		credentials: "include",
		prepareHeaders(headers, api) {
			headers.set("x_api_key", Config.VITE_API_KEY);
		},
		...api,
	})(args, api, extraOptions);

	return result;
};

export const BaseAPI = createApi({
	tagTypes: ["Restaurant", "Slug", "Table", "Admin", "MenuCategory", "Permission", "Order"],
	baseQuery,
	endpoints: () => ({}),
});
