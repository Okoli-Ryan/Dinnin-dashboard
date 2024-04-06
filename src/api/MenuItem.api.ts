import { createApi } from "@reduxjs/toolkit/dist/query/react";

import { IMenuCategory, IMenuItem } from "../models";
import { commonFetchBaseQuery } from "./common";

export const MenuItemApi = createApi({
	...commonFetchBaseQuery("menu-item"),
	reducerPath: "MenuItemApi",
	endpoints: (build) => ({
		saveMenuItem: build.mutation<IMenuItem, Partial<IMenuItem>>({
			query: (body) => ({
				url: "/",
				method: "POST",
				body,
			}),
		}),
		updateMenuItem: build.mutation<IMenuItem, Partial<IMenuItem>>({
			query: (body) => ({
				url: "",
				method: "PUT",
				body,
			}),
		}),
		deleteMenuItem: build.mutation<boolean, string>({
			query: (body) => ({
				url: "/",
				method: "DELETE",
				body,
			}),
		}),
	}),
});

export const { useSaveMenuItemMutation, useUpdateMenuItemMutation, useDeleteMenuItemMutation } = MenuItemApi;
