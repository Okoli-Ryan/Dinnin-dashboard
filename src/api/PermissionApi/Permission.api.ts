import { PermissionGroup } from "@/models/Permission";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

import { ApiBaseUrl, BaseAPI, commonFetchBaseQuery, parseUrl } from "../common";

const baseUrl = ApiBaseUrl("permission");

export const PermissionApi = BaseAPI.injectEndpoints({
	endpoints: (build) => ({
		getPermissions: build.query<PermissionGroup, void>({
			query: () => baseUrl(""),
		}),
	}),
});

export const { useGetPermissionsQuery } = PermissionApi;
