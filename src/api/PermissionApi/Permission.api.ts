import { GetPermissionResponse } from "@/models/Permission";
import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { commonFetchBaseQuery } from "../common";

export const PermissionApi = createApi({
	...commonFetchBaseQuery("permission"),
	reducerPath: "PermissionApi",
	endpoints: build => ({
		getPermissions: build.query<GetPermissionResponse, void>({
			query: () => `/`,
		})
	})
})

export const { useGetPermissionsQuery } = PermissionApi