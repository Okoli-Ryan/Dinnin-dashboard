import { IListResponse } from "@/interfaces/IListResponse";
import { IAdminListRequest } from "@/models/Admin/AdminListRequest";
import { GetPermissionsByAdminResponse, PermissionGroup } from "@/models/Permission";
import { createApi } from "@reduxjs/toolkit/query/react";

import { Admin, IAdmin } from "../../models";
import { IAdminLoginRequest } from "../../models/Admin";
import { ApiBaseUrl, BaseAPI, commonFetchBaseQuery } from "../common";

const baseUrl = ApiBaseUrl("admin");
export const AdminApi = BaseAPI.injectEndpoints({
	overrideExisting: true,
	endpoints: (build) => ({
		getAdmins: build.query<IListResponse<IAdmin>, IAdminListRequest>({
			query: (params) => ({
				url: baseUrl(),
				method: "GET",
				params,
			}),
		}),
		createAdmin: build.mutation<Admin, Partial<Admin>>({
			query: (body) => ({
				url: baseUrl(),
				method: "POST",
				body,
			}),
			transformErrorResponse(baseQueryReturnValue, meta, arg) {
				console.log({ baseQueryReturnValue });
				return baseQueryReturnValue;
			},
		}),

		login: build.mutation<IAdmin, IAdminLoginRequest>({
			query: (body) => ({
				url: baseUrl("/login"),
				method: "POST",
				body,
			}),
		}),
		logout: build.query<void, void>({
			query: () => ({
				url: baseUrl("/logout"),
			}),
		}),
		updateAdmin: build.mutation<IAdmin, Partial<IAdmin>>({
			query: (body) => ({
				url: baseUrl(),
				method: "PUT",
				body,
			}),
		}),
		getAdminPermissions: build.query<{ adminName: string; permissions: number[] }, string>({
			query: (adminId) => ({
				url: baseUrl(`/permissions/${adminId}`),
			}),
			transformResponse: (response: GetPermissionsByAdminResponse) => {
				let permissionGroups = Object.values(response.permissionGroups).flatMap((permissions) => permissions.map((permission) => permission.id));

				return { permissions: permissionGroups, adminName: response.adminName };
			},
		}),
		updateAdminPermissions: build.mutation<boolean, { adminId: string; permissionIds: string[] }>({
			query: (body) => ({
				url: baseUrl(`/permissions/${body.adminId}`),
				method: "POST",
				body: body.permissionIds,
			}),
		}),
	}),
});

export const {
	useCreateAdminMutation,
	useLoginMutation,
	useLazyLogoutQuery,
	useUpdateAdminMutation,
	useGetAdminsQuery,
	useGetAdminPermissionsQuery,
	useUpdateAdminPermissionsMutation,
	endpoints: { login },
} = AdminApi;
