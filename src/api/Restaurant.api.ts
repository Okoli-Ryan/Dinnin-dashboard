import { createApi } from "@reduxjs/toolkit/query/react";

import { Restaurant } from "../models";
import { commonFetchBaseQuery } from "./common";

export const RestaurantApi = createApi({
	...commonFetchBaseQuery("restaurant", true),
	tagTypes: ["Restaurant", "Slug"],
	reducerPath: "RestaurantApi",
	endpoints: (build) => ({
		doesSlugExist: build.query<boolean, string>({
			query: (slugName) => `/slug/${slugName}`,
			providesTags: (res, err, arg) => [{ type: "Slug", id: arg }],
		}),
		createRestaurant: build.mutation<Restaurant, Partial<Restaurant>>({
			query: (body) => ({
				url: "/",
				method: "POST",
				body,
			}),
		}),
		updateRestaurant: build.mutation<Restaurant, Partial<Restaurant>>({
			query: (body) => ({
				url: "/",
				method: "PUT",
				body,
			}),
		}),
	}),
});

export const { useLazyDoesSlugExistQuery, useCreateRestaurantMutation, useUpdateRestaurantMutation } = RestaurantApi;
