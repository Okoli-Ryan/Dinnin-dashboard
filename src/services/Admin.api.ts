import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_KEY, BASE_URL } from "../core/Constants";
import { IError } from "../interfaces/IError";
import { Admin } from "../models";
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
			transformErrorResponse(baseQueryReturnValue, meta, arg) {
				return baseQueryReturnValue;
			},
		}),
	}),
});

export const {
	useCreateAdminMutation,
	useLoginMutation,
	endpoints: { login },
} = AdminApi;
