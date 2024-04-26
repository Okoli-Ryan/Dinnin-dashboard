import { IOrder } from "@/models/Order";
import { createApi } from "@reduxjs/toolkit/query/react";

import { ApiBaseUrl, BaseAPI, commonFetchBaseQuery } from "../common";

const baseUrl = ApiBaseUrl("order");
export const OrderApi = BaseAPI.injectEndpoints({
	endpoints: (build) => ({
		getActiveOrders: build.query<IOrder[], Date | undefined>({
			/**
			 * @param lastTime - The last time data was retrieved.
			 */
			query: (lastTime) => ({
				url: baseUrl("/active"),
				params: { lastTime },
				method: "GET",
			}),
		}),
		updateOrder: build.mutation<IOrder, Partial<IOrder>>({
			query: (body) => ({
				url: baseUrl(),
				method: "PUT",
				body,
			}),
		}),
	}),
});

export const { useLazyGetActiveOrdersQuery, useUpdateOrderMutation } = OrderApi;
