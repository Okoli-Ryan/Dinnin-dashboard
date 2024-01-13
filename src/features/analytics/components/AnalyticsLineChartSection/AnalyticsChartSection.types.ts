export enum AnalyticsLineChartIntervalOptionsEnum {
	MONTHLY = "month",
	WEEKLY = "week",
}

export const AnalyticsLineChartIntervalOptions = [
	{ label: "Monthly", value: AnalyticsLineChartIntervalOptionsEnum.MONTHLY },
	{ label: "Weekly", value: AnalyticsLineChartIntervalOptionsEnum.WEEKLY },
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
	INTERVAL = "interval",
	STARTTIME = "startTime",
	ENDTIME = "endTime",
	DATERANGE = "dateRange",
}
