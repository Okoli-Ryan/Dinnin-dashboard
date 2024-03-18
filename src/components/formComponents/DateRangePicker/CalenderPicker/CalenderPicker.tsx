import "./Calender.css";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import useCalenderPicker from "./useCalenderPicker";

export interface ICalenderPicker {
	onDateSelect: (date: Date) => void;
	startDate: Date;
	endDate: Date;
	onChangeMonth: (date: Date) => void;
	type?: "start" | "end";
	className?: string;
	monthView: Date;
}

/**
 *
 * @typedef {{onDateSelect: (date) => void, selectedDate: Date, type?: "start"|"end", onChangeMonth: (date) => void, startDate?: Date, endDate?: Date}} CalenderPickerProps
 * @param {CalenderPickerProps} props
 */
function CalendarPicker(props: ICalenderPicker) {
	const { generateCalendar, month, year, handleNextMonth, handlePrevMonth, monthNames } = useCalenderPicker(props);

	return (
		<div id="calendar" className={props.className}>
			<div className="calendar-header">
				<button className="prev-button" onClick={handlePrevMonth}>
					<BsChevronLeft />
				</button>
				<h2>
					{monthNames[month]} {year}
				</h2>
				<button className="next-button" onClick={handleNextMonth}>
					<BsChevronRight />
				</button>
			</div>

			<table>
				<thead>
					<tr>
						<th>Sun</th>
						<th>Mon</th>
						<th>Tue</th>
						<th>Wed</th>
						<th>Thu</th>
						<th>Fri</th>
						<th>Sat</th>
					</tr>
				</thead>
				<tbody>{generateCalendar()}</tbody>
			</table>
		</div>
	);
}

export default CalendarPicker;
