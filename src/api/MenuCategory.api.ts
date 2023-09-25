import { createApi } from '@reduxjs/toolkit/dist/query/react';

import { IMenuCategory } from '../models';
import { commonFetchBaseQuery } from './common';

export const MenuCategoryApi = createApi({
	...commonFetchBaseQuery("menu-category", true),
	reducerPath: "MenuCategoryApi",
	endpoints: (build) => ({
		fetchMenuCategories: build.query<IMenuCategory[], string>({
			query: (restaurantId: string) => `rid/${restaurantId}`,
		}),
		saveMenuCategory: build.mutation<IMenuCategory, Partial<IMenuCategory>>({
			query: (body) => ({
				url: "/",
				method: "POST",
				body,
			}),
		}),
		updateMenuCategory: build.mutation<IMenuCategory, Partial<IMenuCategory>>({
			query: (body) => ({
				url: "/",
				method: "PUT",
				body,
			}),
		}),
		updateMultipleMenuCategory: build.mutation<IMenuCategory[], Partial<IMenuCategory>[]>({
			query: (body) => ({
				url: "/multiple",
				method: "PUT",
				body,
			}),
		}),
		deleteMenuCategory: build.mutation<boolean, string>({
			query: (id) => ({
				url: `/${id}`,
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
