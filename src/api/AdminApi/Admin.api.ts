import { IListResponse } from "@/interfaces/IListResponse";
import { IAdminListRequest } from "@/models/Admin/AdminListRequest";
import { GetPermissionsByAdminResponse, PermissionGroup } from "@/models/Permission";
import { createApi } from "@reduxjs/toolkit/query/react";

import { Admin, IAdmin } from "../../models";
import { IAdminLoginRequest } from "../../models/Admin";
import { commonFetchBaseQuery } from "../common";

export const AdminApi = createApi({
	reducerPath: "AdminApi",
	tagTypes: ["Admin"],
	...commonFetchBaseQuery("admin"),
	endpoints: (build) => ({
		getAdmins: build.query<IListResponse<IAdmin>, IAdminListRequest>({
			query: (params) => ({
				url: `/`,
				method: "GET",
				params,
			}),
		}),
		createAdmin: build.mutation<Admin, Partial<Admin>>({
			query: (body) => ({
				url: "/",
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
				url: "/login",
				method: "POST",
				body,
				credentials: undefined,
			}),
		}),
		logout: build.query<void, void>({
			query: () => ({
				url: "/logout",
				credentials: undefined,
			}),
		}),
		updateAdmin: build.mutation<IAdmin, Partial<IAdmin>>({
			query: (body) => ({
				url: "/",
				method: "PUT",
				body,
			}),
		}),
		getAdminPermissions: build.query<{ adminName: string; permissions: number[] }, string>({
			query: (adminId) => ({
				url: `/permissions/${adminId}`,
			}),
			transformResponse: (response: GetPermissionsByAdminResponse) => {
				let permissionGroups = Object.values(response.permissionGroups).flatMap((permissions) => permissions.map((permission) => permission.id));

				return { permissions: permissionGroups, adminName: response.adminName };
			},
		}),
		updateAdminPermissions: build.mutation<boolean, { adminId: string; permissionIds: string[] }>({
			query: (body) => ({
				url: `/permissions/${body.adminId}`,
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
