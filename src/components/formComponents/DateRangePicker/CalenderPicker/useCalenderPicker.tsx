import { isSameDay, isWithinInterval } from "date-fns";

import { ICalenderPicker } from "./CalenderPicker";
import CalenderButton from "./components/CalenderButton";

/**
 *
 * @param {import("./CalenderPicker").CalenderPickerProps} param0
 * @returns
 */
export default function useCalenderPicker({ onDateSelect, startDate, endDate, onChangeMonth, monthView }: ICalenderPicker) {
	const currentDate = new Date();

	const year = monthView.getFullYear();
	const month = monthView.getMonth();

	const daysInMonth = new Date(year, month + 1, 0).getDate();
	const daysInPrevMonth = new Date(year, month, 0).getDate();

	const handlePrevMonth = () => {
		const __selectedDate = new Date(monthView);
		__selectedDate.setMonth(__selectedDate.getMonth() - 1);

		onChangeMonth(__selectedDate);
	};

	const handleNextMonth = () => {
		const __selectedDate = new Date(monthView);
		__selectedDate.setMonth(__selectedDate.getMonth() + 1);

		onChangeMonth(__selectedDate);
	};

	const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	const handleDateClick = (date: Date) => {
		onDateSelect(date);
	};

	let dayCounter = 0;

	const generateCalendar = () => {
		const firstDay = new Date(year, month, 1).getDay();

		const calendar = [];

		// Fill in the leading empty cells for the previous month
		for (let i = 0; i < firstDay; i++) {
			const _date = new Date(year, month - 1, daysInPrevMonth - firstDay + i + 1);
			dayCounter++;

			calendar.push(<CalenderButton key={_date.toISOString()} date={_date} disabled className={`other-month `} onClick={handleDateClick} />);
		}

		// Fill in the days of the current month
		for (let day = 1; day <= daysInMonth; day++) {
			const _date = new Date(monthView);
			_date.setDate(day);

			const isToday = isSameDay(_date, currentDate);

			const cellClass = isToday ? "today" : "";
			const inRangeClass = isWithinInterval(_date, { start: startDate, end: endDate }) ? "in-range" : "";
			const startOfRangeClass = isSameDay(_date, startDate) ? "start-of-range" : "";
			const endOfRangeClass = isSameDay(_date, endDate) ? "end-of-range" : "";
			dayCounter++;

			calendar.push(
				<CalenderButton
					key={_date.toISOString()}
					date={_date}
					className={`${inRangeClass} ${cellClass} ${startOfRangeClass} ${endOfRangeClass}`}
					onClick={handleDateClick}
				/>
			);
		}

		//Need 42 days to show on calender to prevent height changes
		const daysInNextMonth = 42 - dayCounter;

		for (let i = 0; i < daysInNextMonth; i++) {
			const _date = new Date(year, month + 1, i + 1);

			calendar.push(<CalenderButton key={_date.toISOString()} date={_date} disabled className={`other-month`} onClick={handleDateClick} />);
		}

		return calendar;
	};

	return {
		currentDate,
		handleDateClick,
		generateCalendar,
		monthNames,
		handleNextMonth,
		handlePrevMonth,
		month,
		year,
	};
}
