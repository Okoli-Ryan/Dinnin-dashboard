import { Form } from "antd";
import { useEffect, useState } from "react";

interface IUseDateRangePicker {
	name: string;
}

export default function useCalenderRangePicker({ name }: IUseDateRangePicker) {
	const initDate = new Date();

	const form = Form.useFormInstance();

	const formStartDate = form.getFieldValue(name)?.startDate;
	const formEndDate = form.getFieldValue(name)?.endDate;

	const [startDate, setStartDate] = useState<Date>(formStartDate || initDate);
	const [endDate, setEndDate] = useState<Date>(formEndDate || initDate);
	const [selectedRangeOption, setSelectedRangeOption] = useState<string | undefined>("Today");
	const [currentMonthView, setCurrentMonthView] = useState(initDate);
	const [dateInputState, setDateInputState] = useState("start");

	useEffect(() => {
		setCurrentMonthView(startDate);
	}, [startDate]);

	function onDateOptionChange(value: string, startDate: Date, endDate: Date) {
		setStartDate(startDate);
		setEndDate(endDate);
		onSelectRangeOption(value);
	}

	function onSelectRangeOption(e?: string) {
		setSelectedRangeOption(e);
	}

	function onSelectDateToggle(selectedDate: Date) {
		// De-select range option
		setSelectedRangeOption(undefined);

		// Check if the selected date is the start date
		if (dateInputState === "start") {
			// Check if the selected start date is after the end date
			if (selectedDate > endDate) {
				// Swap the start and end dates
				setStartDate(endDate);
				setEndDate(selectedDate);
			} else {
				// Set the start date to the selected date
				setStartDate(selectedDate);
			}
			// Set the date input state to "end"
			setDateInputState("end");
			// Exit the function
			return;
		}

		// Check if the selected date is the end date
		if (dateInputState === "end") {
			// Check if the selected end date is before the start date
			if (selectedDate < startDate) {
				// Swap the start and end dates
				setEndDate(startDate);
				setStartDate(selectedDate);
			} else {
				// Set the end date to the selected date
				setEndDate(selectedDate);
			}
			// Set the date input state to "start"
			setDateInputState("start");
			// Exit the function
			return;
		}
	}

	return {
		startDate,
		endDate,
		setStartDate,
		setEndDate,
		onSelectDateToggle,
		dateInputState,
		setCurrentMonthView,
		setDateInputState,
		currentMonthView,
		onSelectRangeOption,
		selectedRangeOption,
		onDateOptionChange,
	};
}
