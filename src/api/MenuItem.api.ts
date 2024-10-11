import { IMenuItem } from "../models";
import { ApiBaseUrl, BaseAPI } from "./common";

const baseUrl = ApiBaseUrl("menu-item");

export const MenuItemApi = BaseAPI.injectEndpoints({
	endpoints: (build) => ({
		saveMenuItem: build.mutation<IMenuItem, Partial<IMenuItem>>({
			query: (body) => ({
				url: baseUrl(),
				method: "POST",
				body,
			}),
		}),
		updateMenuItem: build.mutation<IMenuItem, Partial<IMenuItem>>({
			query: (body) => ({
				url: baseUrl(),
				method: "PUT",
				body,
			}),
		}),
		deleteMenuItem: build.mutation<boolean, string>({
			query: (body) => ({
				url: baseUrl(),
				method: "DELETE",
				body,
			}),
		}),
	}),
});

export const { useSaveMenuItemMutation, useUpdateMenuItemMutation, useDeleteMenuItemMutation } = MenuItemApi;
