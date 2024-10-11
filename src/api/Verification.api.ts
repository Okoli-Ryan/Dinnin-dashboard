import { createApi } from '@reduxjs/toolkit/dist/query/react';

import { Admin } from '../models';
import { ApiBaseUrl, BaseAPI, commonFetchBaseQuery } from "./common";

const baseUrl = ApiBaseUrl("verify");

export const VerificationApi = BaseAPI.injectEndpoints({
	endpoints: (build) => ({
		verifyAdmin: build.query<Admin, { id?: string; code?: string }>({
			query: ({ code }) => baseUrl(`/${code}`),
		}),
	}),
});

export const { useVerifyAdminQuery } = VerificationApi;
