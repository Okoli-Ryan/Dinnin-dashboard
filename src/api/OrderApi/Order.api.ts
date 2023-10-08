import { IOrder } from "@/models/Order";
import { createApi } from "@reduxjs/toolkit/query/react";

import { commonFetchBaseQuery } from "../common";

export const OrderApi = createApi({
	reducerPath: "OrderApi",
	tagTypes: ["Order"],
	...commonFetchBaseQuery("Order"),
	endpoints: (build) => ({
		getActiveOrders: build.query<IOrder[], void>({
			query: () => ({
				url: "/active",
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

export const { useGetActiveOrdersQuery, useUpdateOrderMutation } = OrderApi;
