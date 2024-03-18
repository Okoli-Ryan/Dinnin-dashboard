import React from "react";

import DateRangeButton from "@/components/formComponents/DateRangePicker";
import Select from "@/components/formComponents/Select";

import { AnalyticsBarChartDropdownOptions, AnalyticsControlOptionsEnum, AnalyticsLineChartTypes } from "../../AnalyticsChartSection.types";
import { YEAR_DROPDOWN_OPTIONS } from "../../AnalyticsChartSection.utils";
import useAnalyticsChartControl from "./useAnalyticsChartControl";

export interface IAnalyticsChartControl {
	children: React.ReactNode;

	showIntervalControl?: boolean;
	showYearDropdown?: boolean;
	showDateRangeControl?: boolean;
}

const { YEAR, CHARTTYPE, GROUPBY, DATERANGE } = AnalyticsControlOptionsEnum;

export default function AnalyticsChartControl({ children, showIntervalControl, showYearDropdown, showDateRangeControl }: IAnalyticsChartControl) {
	const { headerLabel, form } = useAnalyticsChartControl();

	return (
		<div>
			<div className="flex items-center justify-between ">
				<h3 className="text-base font-bold mb-6">{headerLabel}</h3>
				<div className="flex items-center gap-4">
					<Select name={CHARTTYPE} options={AnalyticsLineChartTypes} />
					{showIntervalControl && <Select name={GROUPBY} options={AnalyticsBarChartDropdownOptions} />}
					{showYearDropdown && <Select name={YEAR} options={YEAR_DROPDOWN_OPTIONS} />}
					{showDateRangeControl && <DateRangeButton name={DATERANGE} />}
				</div>
			</div>
			{children}
		</div>
	);
}
