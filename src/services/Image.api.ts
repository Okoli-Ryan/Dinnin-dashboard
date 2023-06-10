import { RcFile } from "antd/es/upload";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API_KEY, BASE_URL } from "../core/Constants";

export const ImageApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: `${BASE_URL}/image`,
		prepareHeaders(headers, api) {
			headers.set("x-api-key", API_KEY);
			headers.set("Content-Type", "multipart/form-data");
		},
	}),
	endpoints: (build) => ({
		upload: build.query<string, FormData>({
			query: (file) => ({
				url: "/",
				method: "POST",
				body: file,
			}),
		}),
	}),
});

export const uploadImage = async (formData: FormData) => {
	try {
		const response = await fetch(`${BASE_URL}/Image`, {
			method: "POST",
			body: formData,
			headers: {
				"Content-Type": "multipart/form-data",
				"x-api-key": API_KEY,
			},
		});

		if (!response.ok) {
			throw new Error("Upload failed");
		}

		return await response.json();
	} catch (error) {
		throw new Error("Upload failed");
	}
};

export const { useLazyUploadQuery } = ImageApi;
