import { Form } from "antd";

import { useGetChartAnalyticsQuery } from "@/api/AnalyticsApi";
import { reportErrorMessage } from "@/core/Utils";

import { AnalyticsChartTypeEnum, AnalyticsControlOptionsEnum } from "../../AnalyticsChartSection.types";
import { getDateRangeFromYear, INITIAL_CHART_RESPONSE } from "../../AnalyticsChartSection.utils";

const { CHARTTYPE, YEAR, GROUPBY, DATERANGE } = AnalyticsControlOptionsEnum;

export default function useOrdersBarChart() {
	const form = Form.useFormInstance();

	Form.useWatch(CHARTTYPE, form);
	Form.useWatch(YEAR, form);
	Form.useWatch(GROUPBY, form);

	const year = form.getFieldValue(YEAR);
	const chartType = form.getFieldValue(CHARTTYPE);
	const groupBy = form.getFieldValue(GROUPBY);

	const { startTime, endTime } = getDateRangeFromYear(year);

	const {
		data: chartResponse = INITIAL_CHART_RESPONSE,
		isFetching,
		isError,
	} = useGetChartAnalyticsQuery({ groupBy, startTime, endTime, chartType }, { refetchOnMountOrArgChange: true });

	if (isError) {
		reportErrorMessage(null, "Unable to get analytics data");
	}

	return {
		chartData: chartResponse.chartData,
		yAxisKey: chartResponse.key,
		isLoading: isFetching,
	};
}
