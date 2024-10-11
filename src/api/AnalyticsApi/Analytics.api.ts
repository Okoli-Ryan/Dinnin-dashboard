import { AnalyticsChartTypeEnum } from "@/features/analytics/components/AnalyticsLineChartSection/AnalyticsChartSection.types";
import { IAnalyticsCards, IAnalyticsRequestParams, IAnalyticsTimeParams, IChartResponse, IOrderItemAnalyticsResponse } from "@/models/Analytics";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

import { ApiBaseUrl, BaseAPI, commonFetchBaseQuery } from "../common";

const baseUrl = ApiBaseUrl("analytics");

export const AnalyticsApi = BaseAPI.injectEndpoints({
	endpoints: (build) => ({
		getAnalyticsCards: build.query<IAnalyticsCards, void>({
			query: () => baseUrl(),
		}),
		getRevenueAnalytics: build.query<IChartResponse, IAnalyticsRequestParams>({
			query: (params) => ({ url: baseUrl("/order-amount"), params }),
		}),
		getOrderCountAnalytics: build.query<IChartResponse, IAnalyticsRequestParams>({
			query: (params) => ({ url: baseUrl("/order-count"), params }),
		}),
		getOrderItemsAnalytics: build.query<IOrderItemAnalyticsResponse[], IAnalyticsTimeParams | void>({
			query: (params) => ({ url: baseUrl("/order-item-count"), params: params as IAnalyticsRequestParams }),
		}),
		getChartAnalytics: build.query<IChartResponse, IAnalyticsRequestParams & { chartType: AnalyticsChartTypeEnum }>({
			query: (params) => {
				let url = params.chartType === AnalyticsChartTypeEnum.REVENUE ? "/order-amount" : "/order-count";
				const { chartType, ...restParams } = params;
				return { url: baseUrl(url), params: restParams };
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
