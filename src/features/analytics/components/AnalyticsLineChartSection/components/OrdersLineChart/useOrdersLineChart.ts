import { Form } from 'antd';

import { useGetChartAnalyticsQuery } from '@/api/AnalyticsApi';
import { reportErrorMessage } from '@/core/Utils';
import { AnalyticsGroupByEnum } from '@/models/Analytics';

import { AnalyticsControlOptionsEnum } from '../../AnalyticsChartSection.types';
import { INITIAL_CHART_RESPONSE } from '../../AnalyticsChartSection.utils';

const { CHARTTYPE, STARTTIME, ENDTIME, DATERANGE } = AnalyticsControlOptionsEnum;

export default function useOrdersLineChart() {
	const form = Form.useFormInstance();

	Form.useWatch(CHARTTYPE, form);
	Form.useWatch(DATERANGE, form);

	const endTime = form.getFieldValue(DATERANGE)?.[ENDTIME];
	const startTime = form.getFieldValue(DATERANGE)?.[STARTTIME];
	const chartType = form.getFieldValue(CHARTTYPE);

	const { data: chartResponse = INITIAL_CHART_RESPONSE, isError } = useGetChartAnalyticsQuery(
		{ groupBy: AnalyticsGroupByEnum.DATE, startTime, endTime, chartType },
		{ refetchOnMountOrArgChange: true }
	);

	if (isError) {
		reportErrorMessage(null, "Unable to get analytics data");
	}

	return { chartData: chartResponse.chartData, yAxisKey: chartResponse.key };
}
