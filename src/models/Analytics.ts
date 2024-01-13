export interface IChartValue {
	date: string | Date;
	value: number;
}

export interface IChartResponse {
	key: string;
	chartData: IChartValue[];
}

export interface IAnalyticsTimeParams {
	startTime?: string | Date;
	endTime?: string | Date;
}

export enum AnalyticsGroupByEnum {
	DAY = "day",
	WEEK = "week",
	DATE = "date",
	MONTH = "month",
}

export interface IAnalyticsRequestParams extends IAnalyticsTimeParams {
	groupBy?: AnalyticsGroupByEnum;
}

export interface IAnalyticsGrowth {
	total: number;
	percentageChange: number;
}

export interface IAnalyticsCards {
	completedOrders: IAnalyticsGrowth;
	completedOrderItems: IAnalyticsGrowth;
	totalRevenue: IAnalyticsGrowth;
}

export interface IOrderItemAnalyticsResponse {
	itemName: string;
	count: number;
}
