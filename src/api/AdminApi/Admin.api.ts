import { IListResponse } from "@/interfaces/IListResponse";
import { IAdminListRequest } from "@/models/Admin/AdminListRequest";
import { createApi } from "@reduxjs/toolkit/query/react";

import { Admin, IAdmin } from "../../models";
import { IAdminLoginRequest } from "../../models/Admin";
import { commonFetchBaseQuery } from "../common";
import { PermissionGroup } from "@/models/Permission";

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
			}),
		}),
		updateAdmin: build.mutation<IAdmin, Partial<IAdmin>>({
			query: (body) => ({
				url: "/",
				method: "PUT",
				body,
			}),
		}),
		getAdminPermissions: build.query<PermissionGroup, string>({
			query: (adminId) => ({
				url: `/permissions/${adminId}`,
			})
		}),
		updateAdminPermissions: build.mutation<boolean, { adminId: string; permissionIds: string[] }>({
			query: (body) => ({
				url: `/permissions/${body.adminId}`,
				method: "POST",
				body,
			})
		})
	}),
});

export const {
	useCreateAdminMutation,
	useLoginMutation,
	useUpdateAdminMutation,
	useGetAdminsQuery,
	useGetAdminPermissionsQuery,
	useUpdateAdminPermissionsMutation,
	endpoints: { login },
} = AdminApi;
