import React from "react";

import { DateOptionButton } from "./components/DateOptionButton";
import {
	getEndDateForLastMonth,
	getEndDateForLastWeek,
	getEndDateForLastYear,
	getEndDateForThisMonth,
	getEndDateForThisWeek,
	getEndDateForThisYear,
	getStartDateForAllTime,
	getStartDateForLastMonth,
	getStartDateForLastWeek,
	getStartDateForLastYear,
	getStartDateForThisMonth,
	getStartDateForThisWeek,
	getStartDateForThisYear,
} from "./DateOptions.utils";

interface IDateOptions {
	onClick: (label: string, startDate: Date, endDate: Date) => void;
	selectedRangeOption?: string;
}

export default function DateOptions({ onClick, selectedRangeOption }: IDateOptions) {
	return (
		<div className="flex flex-col gap-1 h-full border-r border-[#F4F7F9]">
			<DateOptionButton
				onSelectDateRange={onClick}
				label={"Today"}
				startDate={new Date()}
				endDate={new Date()}
				selectedRangeOption={selectedRangeOption}
			/>
			<DateOptionButton
				label={"This week"}
				onSelectDateRange={onClick}
				startDate={getStartDateForThisWeek()}
				endDate={getEndDateForThisWeek()}
				selectedRangeOption={selectedRangeOption}
			/>
			<DateOptionButton
				label={"Last week"}
				onSelectDateRange={onClick}
				startDate={getStartDateForLastWeek()}
				endDate={getEndDateForLastWeek()}
				selectedRangeOption={selectedRangeOption}
			/>
			<DateOptionButton
				label={"This month"}
				onSelectDateRange={onClick}
				startDate={getStartDateForThisMonth()}
				endDate={getEndDateForThisMonth()}
				selectedRangeOption={selectedRangeOption}
			/>
			<DateOptionButton
				label={"Last month"}
				onSelectDateRange={onClick}
				startDate={getStartDateForLastMonth()}
				endDate={getEndDateForLastMonth()}
				selectedRangeOption={selectedRangeOption}
			/>
			<DateOptionButton
				label={"This year"}
				onSelectDateRange={onClick}
				startDate={getStartDateForThisYear()}
				endDate={getEndDateForThisYear()}
				selectedRangeOption={selectedRangeOption}
			/>
			<DateOptionButton
				label={"Last year"}
				onSelectDateRange={onClick}
				startDate={getStartDateForLastYear()}
				endDate={getEndDateForLastYear()}
				selectedRangeOption={selectedRangeOption}
			/>
			<DateOptionButton
				label={"All Time"}
				onSelectDateRange={onClick}
				startDate={getStartDateForAllTime()}
				endDate={new Date()}
				selectedRangeOption={selectedRangeOption}
			/>
		</div>
	);
}
