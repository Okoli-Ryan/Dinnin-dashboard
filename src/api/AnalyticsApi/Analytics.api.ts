import { IAnalyticsCards, IAnalyticsRequestParams, IAnalyticsTimeParams, IChartResponse, IOrderItemAnalyticsResponse } from "@/models/Analytics";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

import { commonFetchBaseQuery } from "../common";

export const AnalyticsApi = createApi({
	...commonFetchBaseQuery("analytics"),
	reducerPath: "AnalyticsApi",
	endpoints: (build) => ({
		getAnalyticsCards: build.query<IAnalyticsCards, void>({
			query: () => "/",
		}),
		getRevenueAnalytics: build.query<IChartResponse, IAnalyticsRequestParams>({
			query: (params) => ({ url: "/order-amount", params }),
		}),
		getOrderCountAnalytics: build.query<IChartResponse, IAnalyticsRequestParams>({
			query: (params) => ({ url: "/order-count", params }),
		}),
		getOrderItemsAnalytics: build.query<IOrderItemAnalyticsResponse[], IAnalyticsTimeParams>({
			query: (params) => ({ url: "/order-count", params }),
		}),
	}),
});

export const { useGetAnalyticsCardsQuery, useGetRevenueAnalyticsQuery, useGetOrderCountAnalyticsQuery, useGetOrderItemsAnalyticsQuery } = AnalyticsApi;
