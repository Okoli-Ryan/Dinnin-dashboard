
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import Config from '../core/Config';

export const ImageApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: `${Config.VITE_BASE_URL}/image`,
		prepareHeaders(headers, api) {
			headers.set("x_api_key", Config.VITE_API_KEY);
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
