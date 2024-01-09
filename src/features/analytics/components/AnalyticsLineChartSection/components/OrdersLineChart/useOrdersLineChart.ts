import { Form } from "antd";
import React from "react";

import { AnalyticsChartTypeEnum, AnalyticsControlOptionsEnum, AnalyticsLineChartIntervalOptionsEnum } from "../../AnalyticsChartSection.types";
import {
	DUMMY_ORDERS_AMOUNT_CHART_DATA,
	DUMMY_ORDERS_AMOUNT_CHART_DATA_WEEKLY,
	DUMMY_ORDERS_COUNT_CHART_DATA,
	DUMMY_ORDERS_COUNT_CHART_DATA_WEEKLY,
} from "./OrdersLineChart.dummy";

const { CHARTTYPE, INTERVAL } = AnalyticsControlOptionsEnum;

export default function useOrdersLineChart() {
	const form = Form.useFormInstance();

	Form.useWatch([CHARTTYPE], form);
	Form.useWatch([INTERVAL], form);

	const chartType = form.getFieldValue(AnalyticsControlOptionsEnum.CHARTTYPE);
	const interval = form.getFieldValue(AnalyticsControlOptionsEnum.INTERVAL);

	let chartData;
	if (interval === AnalyticsLineChartIntervalOptionsEnum.MONTHLY && chartType === AnalyticsChartTypeEnum.REVENUE) {
		chartData = DUMMY_ORDERS_AMOUNT_CHART_DATA;
	}
	if (interval === AnalyticsLineChartIntervalOptionsEnum.MONTHLY && chartType === AnalyticsChartTypeEnum.ORDER_COUNT) {
		chartData = DUMMY_ORDERS_COUNT_CHART_DATA;
	}
	if (interval === AnalyticsLineChartIntervalOptionsEnum.WEEKLY && chartType === AnalyticsChartTypeEnum.REVENUE) {
		chartData = DUMMY_ORDERS_AMOUNT_CHART_DATA_WEEKLY;
	}
	if (interval === AnalyticsLineChartIntervalOptionsEnum.WEEKLY && chartType === AnalyticsChartTypeEnum.ORDER_COUNT) {
		chartData = DUMMY_ORDERS_COUNT_CHART_DATA_WEEKLY;
	}

	return { form, chartType, chartData };
}
