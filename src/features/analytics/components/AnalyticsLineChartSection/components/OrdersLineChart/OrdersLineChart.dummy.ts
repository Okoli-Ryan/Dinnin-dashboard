import { IChartValue } from "@/models/Analytics";

export const DUMMY_ORDERS_COUNT_CHART_DATA: IChartValue[] = [
	{
		value: 5,
		date: "2023-10-11T00:00:00",
	},
	{
		value: 3,
		date: "2023-10-20T00:00:00",
	},
];

export const DUMMY_ORDERS_COUNT_CHART_DATA_WEEKLY: IChartValue[] = [
	{
		value: 5,
		date: "week 6",
	},
	{
		value: 3,
		date: "week 17",
	},
];

export const DUMMY_ORDERS_AMOUNT_CHART_DATA = [
	{
		value: 10400.0,
		date: "2023-10-11T00:00:00",
	},
	{
		value: 7800.0,
		date: "2023-10-20T00:00:00",
	},
];

export const DUMMY_ORDERS_AMOUNT_CHART_DATA_WEEKLY = [
	{
		value: 10400.0,
		date: "week 11",
	},
	{
		value: 7800.0,
		date: "week 19",
	},
	{
		value: 78000.0,
		date: "week 28",
	},
];
