import { createApi } from "@reduxjs/toolkit/dist/query/react";

import { IMenuCategory } from "../models";
import { commonFetchBaseQuery } from "./common";

export const MenuCategoryApi = createApi({
	...commonFetchBaseQuery("menuCategory", true),
	reducerPath: "MenuCatogoryApi",
	endpoints: (build) => ({
		fetchMenuCategories: build.query<IMenuCategory[], void>({
			query: () => "/",
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
				method: "PATCH",
				body,
			}),
		}),
		deleteMenuCategory: build.mutation<boolean, Partial<IMenuCategory>>({
			query: (body) => ({
				url: "/",
				method: "DELETE",
				body,
			}),
		}),
	}),
});

export const { useSaveMenuCategoryMutation, useFetchMenuCategoriesQuery } = MenuCategoryApi;
