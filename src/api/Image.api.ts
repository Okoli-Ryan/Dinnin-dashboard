import { ApiBaseUrl, BaseAPI } from "./common";

const baseUrl = ApiBaseUrl("image");
export const ImageApi = BaseAPI.injectEndpoints({
	endpoints: (build) => ({
		upload: build.query<{ url: string }, FormData>({
			query: (file) => ({
				url: baseUrl(),
				method: "POST",
				body: file,
			}),
		}),
	}),
});

export const { useLazyUploadQuery } = ImageApi;
