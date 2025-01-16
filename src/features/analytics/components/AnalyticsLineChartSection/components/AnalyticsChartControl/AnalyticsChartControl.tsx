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
	const { headerLabel } = useAnalyticsChartControl();

	return (
		<div>
			<div className="flex flex-col justify-between md:items-center md:flex-row ">
				<h3 className="mb-6 text-base font-bold">{headerLabel}</h3>
				<div className="flex flex-col max-w-xs gap-0 md:gap-4 md:items-center md:flex-row">
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
