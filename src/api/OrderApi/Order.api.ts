import { IOrder } from "@/models/Order";
import { createApi } from "@reduxjs/toolkit/query/react";

import { commonFetchBaseQuery } from "../common";

export const OrderApi = createApi({
	reducerPath: "OrderApi",
	tagTypes: ["Order"],
	...commonFetchBaseQuery("order"),
	endpoints: (build) => ({
		getActiveOrders: build.query<IOrder[], Date | undefined>({
			/**
			 * @param lastTime - The last time data was retrieved.
			 */
			query: (lastTime) => ({
				url: "/active",
				params: { lastTime },
				method: "GET",
			}),
		}),
		updateOrder: build.mutation<IOrder, Partial<IOrder>>({
			query: (body) => ({
				url: "/",
				method: "PUT",
				body,
			}),
		}),
	}),
});

export const { useLazyGetActiveOrdersQuery, useUpdateOrderMutation } = OrderApi;
