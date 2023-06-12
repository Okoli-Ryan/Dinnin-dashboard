import { RcFile } from "antd/es/upload";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API_KEY, BASE_URL } from "../core/Constants";

export const ImageApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: `${BASE_URL}/image`,
		prepareHeaders(headers, api) {
			headers.set("x-api-key", API_KEY);
		},
	}),
	endpoints: (build) => ({
		upload: build.query<{ url: string }, FormData>({
			query: (file) => ({
				url: "/",
				method: "POST",
				body: file,
			}),
		}),
	}),
});

export const { useLazyUploadQuery } = ImageApi;
