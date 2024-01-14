import { AnalyticsChartTypeEnum } from "@/features/analytics/components/AnalyticsLineChartSection/AnalyticsChartSection.types";
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
		getOrderItemsAnalytics: build.query<IOrderItemAnalyticsResponse[], IAnalyticsTimeParams | void>({
			query: (params) => ({ url: "/order-item-count", params: params as IAnalyticsRequestParams }),
		}),
		getChartAnalytics: build.query<IChartResponse, IAnalyticsRequestParams & { chartType: AnalyticsChartTypeEnum }>({
			query: (params) => {
				let url = params.chartType === AnalyticsChartTypeEnum.REVENUE ? "/order-amount" : "/order-count";
				const { chartType, ...restParams } = params;
				return { url, params: restParams };
			},
		}),
	}),
});

export const {
	useGetAnalyticsCardsQuery,
	useGetChartAnalyticsQuery,
	useGetRevenueAnalyticsQuery,
	useGetOrderCountAnalyticsQuery,
	useGetOrderItemsAnalyticsQuery,
} = AnalyticsApi;
