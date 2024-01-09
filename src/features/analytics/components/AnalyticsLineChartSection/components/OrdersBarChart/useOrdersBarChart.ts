import { Form } from "antd";

import { AnalyticsChartTypeEnum, AnalyticsControlOptionsEnum } from "../../AnalyticsChartSection.types";
import { DUMMY_ORDERS_AMOUNT_CHART_DATA_DAILY, DUMMY_ORDERS_COUNT_CHART_DATA_DAILY } from "./OrdersBarChart.dummy";

export default function useOrdersBarChart() {
	const form = Form.useFormInstance();

	Form.useWatch([AnalyticsControlOptionsEnum.CHARTTYPE], form);

	const chartType = form.getFieldValue(AnalyticsControlOptionsEnum.CHARTTYPE);

	const chartData = chartType === AnalyticsChartTypeEnum.ORDER_COUNT ? DUMMY_ORDERS_COUNT_CHART_DATA_DAILY : DUMMY_ORDERS_AMOUNT_CHART_DATA_DAILY;

	return {
		chartData,
	};
}
