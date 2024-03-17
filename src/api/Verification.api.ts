import { createApi } from '@reduxjs/toolkit/dist/query/react';

import { Admin } from '../models';
import { commonFetchBaseQuery } from './common';

export const VerificationApi = createApi({
	...commonFetchBaseQuery("verify"),
	reducerPath: "VerifyApi",
	tagTypes: ["Verify"],
	endpoints: (build) => ({
		verifyAdmin: build.query<Admin, { id?: string; code?: string }>({
			query: ({ code }) => `/${code}`,
		}),
	}),
});

export const { useVerifyAdminQuery } = VerificationApi;
