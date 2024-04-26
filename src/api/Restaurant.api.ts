import { Restaurant } from "../models";
import { ApiBaseUrl, BaseAPI } from "./common";

const baseUrl = ApiBaseUrl("restaurant");
export const RestaurantApi = BaseAPI.injectEndpoints({
	endpoints: (build) => ({
		doesSlugExist: build.query<boolean, string>({
			query: (slugName) => baseUrl(`/slug/${slugName}`),
			providesTags: (res, err, arg) => [{ type: "Slug", id: arg }],
		}),
		createRestaurant: build.mutation<Restaurant, Partial<Restaurant>>({
			query: (body) => ({
				url: baseUrl(),
				method: "POST",
				body,
			}),
		}),
		updateRestaurant: build.mutation<Restaurant, Partial<Restaurant>>({
			query: (body) => ({
				url: baseUrl(),
				method: "PUT",
				body,
			}),
		}),
	}),
});

export const { useLazyDoesSlugExistQuery, useCreateRestaurantMutation, useUpdateRestaurantMutation } = RestaurantApi;
