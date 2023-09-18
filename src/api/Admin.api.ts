import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Admin, IAdmin } from "../models";
import { IAdminLoginRequest, IAdminLoginResponse } from "../models/Admin";
import { commonFetchBaseQuery } from "./common";

export const AdminApi = createApi({
	reducerPath: "AdminApi",
	tagTypes: ["Admin"],
	...commonFetchBaseQuery("admin"),
	endpoints: (build) => ({
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

		login: build.mutation<IAdminLoginResponse, IAdminLoginRequest>({
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
	}),
});

export const {
	useCreateAdminMutation,
	useLoginMutation,
	useUpdateAdminMutation,
	endpoints: { login },
} = AdminApi;
