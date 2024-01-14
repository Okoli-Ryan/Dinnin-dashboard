import { AnalyticsGroupByEnum } from '@/models/Analytics';

export const AnalyticsBarChartDropdownOptions = [
	{ label: "By Day", value: AnalyticsGroupByEnum.DAY },
	{ label: "By Week", value: AnalyticsGroupByEnum.WEEK },
	{ label: "By Month", value: AnalyticsGroupByEnum.MONTH },
];

export enum AnalyticsChartTypeEnum {
	REVENUE = "Revenue",
	ORDER_COUNT = "Count",
}

export const AnalyticsLineChartTypes = [
	{ label: AnalyticsChartTypeEnum.REVENUE, value: AnalyticsChartTypeEnum.REVENUE },
	{ label: AnalyticsChartTypeEnum.ORDER_COUNT, value: AnalyticsChartTypeEnum.ORDER_COUNT },
];

export enum AnalyticsControlOptionsEnum {
	CHARTTYPE = "chartType",
	GROUPBY = "groupBy",
	STARTTIME = "startTime",
	ENDTIME = "endTime",
	DATERANGE = "dateRange",
	YEAR = "year",
}
