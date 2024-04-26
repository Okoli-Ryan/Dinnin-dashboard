import { createApi } from '@reduxjs/toolkit/dist/query/react';

import { IMenuCategory } from '../models';
import { ApiBaseUrl, BaseAPI, commonFetchBaseQuery } from "./common";

const baseUrl = ApiBaseUrl("menu-category");

export const MenuCategoryApi = BaseAPI.injectEndpoints({
	endpoints: (build) => ({
		fetchMenuCategories: build.query<IMenuCategory[], string>({
			query: (restaurantId: string) => baseUrl(`rid/${restaurantId}`),
		}),
		saveMenuCategory: build.mutation<IMenuCategory, Partial<IMenuCategory>>({
			query: (body) => ({
				url: baseUrl(),
				method: "POST",
				body,
			}),
		}),
		updateMenuCategory: build.mutation<IMenuCategory, Partial<IMenuCategory>>({
			query: (body) => ({
				url: baseUrl(),
				method: "PUT",
				body,
			}),
		}),
		updateMultipleMenuCategory: build.mutation<IMenuCategory[], Partial<IMenuCategory>[]>({
			query: (body) => ({
				url: baseUrl("/multiple"),
				method: "PUT",
				body,
			}),
		}),
		deleteMenuCategory: build.mutation<boolean, string>({
			query: (id) => ({
				url: baseUrl(`/${id}`),
				method: "DELETE",
			}),
		}),
	}),
});

export const {
	useSaveMenuCategoryMutation,
	useFetchMenuCategoriesQuery,
	useUpdateMenuCategoryMutation,
	useDeleteMenuCategoryMutation,
	useUpdateMultipleMenuCategoryMutation,
} = MenuCategoryApi;
