import { createApi } from "@reduxjs/toolkit/dist/query/react";

import { commonFetchBaseQuery } from "./common";

export const RestaurantApi = createApi({
	...commonFetchBaseQuery("restaurant"),
	reducerPath: "RestaurantApi",
	endpoints: (build) => ({
		doesSlugExist: build.mutation<boolean, string>({
			query: (slugName) => `/slug/${slugName}`,
		}),
	}),
});

export const { useDoesSlugExistMutation } = RestaurantApi;
