import React from "react";

import DateRangeButton from "@/components/formComponents/DateRangePicker";
import Select from "@/components/formComponents/Select";

import { AnalyticsLineChartIntervalOptions, AnalyticsLineChartTypes } from "../../AnalyticsChartSection.types";
import useAnalyticsChartControl from "./useAnalyticsChartControl";

interface IAnalyticsLineChartControl {
	children: React.ReactNode;

	showIntervalControl?: boolean;
	showChartTypeControl?: boolean;
}

export default function AnalyticsLineChartControl({ children, showIntervalControl, showChartTypeControl }: IAnalyticsLineChartControl) {
	const { headerLabel } = useAnalyticsChartControl();

	return (
		<div>
			<div className="flex items-center justify-between ">
				<h3 className="text-base font-bold">{headerLabel}</h3>
				<div className="flex items-center gap-4">
					{showIntervalControl && <Select name="interval" options={AnalyticsLineChartIntervalOptions} />}
					{showChartTypeControl && <Select name="chartType" options={AnalyticsLineChartTypes} />}
					<DateRangeButton name="dateRange" onChange={(startDate, endDate) => console.log({ startDate, endDate })} />
				</div>
			</div>
			{children}
		</div>
	);
}
