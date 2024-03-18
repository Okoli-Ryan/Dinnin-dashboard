import { IChartResponse } from "@/models/Analytics";

import { AnalyticsChartTypeEnum } from "./AnalyticsChartSection.types";

export const INITIAL_CHART_RESPONSE: IChartResponse = {
	key: AnalyticsChartTypeEnum.REVENUE,
	chartData: [],
};

export const INITIAL_CHART_COUNT_DATA: IChartResponse = {
	key: AnalyticsChartTypeEnum.ORDER_COUNT,
	chartData: [],
};

export const YEAR_DROPDOWN_OPTIONS = (() => {
	const initialYear = 2023;
	const currentYear = new Date().getFullYear();
	const differenceBetweenYears = currentYear - initialYear;
	const result = [];
	for (let i = 0; i <= differenceBetweenYears; i++) {
		result.push({ label: `Year: ${initialYear + i}`, value: initialYear + i });
	}
	return result;
})();

export const getDateRangeFromYear = (year: number) => {
	const startTime = new Date(year, 0, 1).toISOString();
	const endTime = new Date(year, 11, 31).toISOString();
	return { startTime, endTime };
};
