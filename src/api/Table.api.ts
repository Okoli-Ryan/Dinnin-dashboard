import { createApi } from '@reduxjs/toolkit/dist/query/react';

import { ITable } from '../models';
import { ApiBaseUrl, BaseAPI, commonFetchBaseQuery, parseUrl } from "./common";

const baseUrl = ApiBaseUrl("table");

export const TableApi = BaseAPI.injectEndpoints({
	overrideExisting: true,
	endpoints: (build) => ({
		getTables: build.query<ITable[], string>({
			query: (restaurantId) => ({
				url: baseUrl(`/rid/${restaurantId}`),
				method: "GET",
			}),
		}),
		saveTable: build.mutation<ITable, Partial<ITable>>({
			query: (body) => ({
				url: baseUrl(),
				method: "POST",
				body,
			}),
		}),
		updateTable: build.mutation<ITable, Partial<ITable>>({
			query: (body) => ({
				url: baseUrl(),
				method: "PUT",
				body,
			}),
		}),
		generateQrCode: build.mutation<ITable, string>({
			query: (id) => ({
				url: baseUrl(`generate-code/${id}`),
				method: "PUT",
			}),
		}),
		deleteTable: build.mutation<boolean, string>({
			query: (id) => ({
				url: baseUrl(`/${id}`),
				method: "DELETE",
			}),
		}),
	}),
});

export const { useGetTablesQuery, useSaveTableMutation, useUpdateTableMutation, useGenerateQrCodeMutation, useDeleteTableMutation } = TableApi;
