import { createApi } from '@reduxjs/toolkit/dist/query/react';

import { ITable } from '../models';
import { commonFetchBaseQuery } from './common';

export const TableApi = createApi({
	...commonFetchBaseQuery("table"),
	reducerPath: "TableApi",
	endpoints: (build) => ({
		getTables: build.query<ITable[], string>({
			query: (restaurantId) => ({
				url: `/rid/${restaurantId}`,
				method: "GET",
			}),
		}),
		saveTable: build.mutation<ITable, Partial<ITable>>({
			query: (body) => ({
				url: "/",
				method: "POST",
				body,
			}),
		}),
		updateTable: build.mutation<ITable, Partial<ITable>>({
			query: (body) => ({
				url: "",
				method: "PUT",
				body,
			}),
		}),
		generateQrCode: build.mutation<ITable, string>({
			query: (id) => ({
				url: `generate-code/${id}`,
				method: "PUT",
			}),
		}),
		deleteTable: build.mutation<boolean, string>({
			query: (id) => ({
				url: `/${id}`,
				method: "DELETE",
			}),
		}),
	}),
});

export const { useGetTablesQuery, useSaveTableMutation, useUpdateTableMutation, useGenerateQrCodeMutation, useDeleteTableMutation } = TableApi;
