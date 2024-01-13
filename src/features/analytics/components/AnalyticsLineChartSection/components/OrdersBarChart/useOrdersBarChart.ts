import { Form } from "antd";

import { useGetOrderCountAnalyticsQuery, useGetRevenueAnalyticsQuery } from "@/api/AnalyticsApi";
import { reportErrorMessage } from "@/core/Utils";
import { AnalyticsGroupByEnum, IChartResponse } from "@/models/Analytics";

import { AnalyticsChartTypeEnum, AnalyticsControlOptionsEnum } from "../../AnalyticsChartSection.types";
import { DUMMY_ORDERS_AMOUNT_CHART_DATA_DAILY, DUMMY_ORDERS_COUNT_CHART_DATA_DAILY } from "./OrdersBarChart.dummy";

const { CHARTTYPE, STARTTIME, ENDTIME, DATERANGE } = AnalyticsControlOptionsEnum;

export default function useOrdersBarChart() {
	const form = Form.useFormInstance();

	Form.useWatch(CHARTTYPE, form);
	Form.useWatch(DATERANGE, form);

	const endTime = form.getFieldValue(DATERANGE)?.[ENDTIME];
	const startTime = form.getFieldValue(DATERANGE)?.[STARTTIME];
	const chartType = form.getFieldValue(CHARTTYPE);

	const {
		data: revenueChartData = INITITIAL_CHART_REVENUE_DATA,
		isFetching: isRevenueChartFetching,
		isError: isRevenueChartError,
	} = useGetRevenueAnalyticsQuery(
		{ groupBy: AnalyticsGroupByEnum.DAY, startTime, endTime },
		{ refetchOnMountOrArgChange: true, skip: chartType === AnalyticsChartTypeEnum.ORDER_COUNT }
	);

	const {
		data: orderCountChartData = INITITIAL_CHART_COUNT_DATA,
		isFetching: isOrderCountChartFetching,
		isError: isOrderCountChartError,
	} = useGetOrderCountAnalyticsQuery(
		{ groupBy: AnalyticsGroupByEnum.DAY, startTime, endTime },
		{ refetchOnMountOrArgChange: true, skip: chartType === AnalyticsChartTypeEnum.REVENUE }
	);

	if (isRevenueChartError || isOrderCountChartError) {
		reportErrorMessage(null, "Unable to get analytics data");
	}

	const chartDataResponse = chartType === AnalyticsChartTypeEnum.REVENUE ? revenueChartData : orderCountChartData;

	return {
		chartData: chartDataResponse.chartData,
		yAxisKey: chartDataResponse.key,
		isLoading: isRevenueChartFetching || isOrderCountChartFetching,
	};
}

const INITITIAL_CHART_REVENUE_DATA: IChartResponse = {
	key: AnalyticsChartTypeEnum.REVENUE,
	chartData: [],
};

const INITITIAL_CHART_COUNT_DATA: IChartResponse = {
	key: AnalyticsChartTypeEnum.ORDER_COUNT,
	chartData: [],
};
