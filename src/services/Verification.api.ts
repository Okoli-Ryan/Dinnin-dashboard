import { createApi } from '@reduxjs/toolkit/dist/query/react';

import { Admin } from '../models';
import { commonFetchBaseQuery } from './common';

export const VerificationApi = createApi({
	...commonFetchBaseQuery("verify"),
	reducerPath: "VerifyApi",
	endpoints: (build) => ({
		verifyAdmin: build.query<Admin, { id?: string; code?: string }>({
			query: ({ id, code }) => `/${id}/${code}`,
		}),
	}),
});

export const { useVerifyAdminQuery } = VerificationApi;
