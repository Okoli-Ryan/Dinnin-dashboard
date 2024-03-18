import { Modal } from "antd";
import { formatISO } from "date-fns";
import { memo } from "react";

import { Button } from "@/components/Button";

import CalendarPicker from "../CalenderPicker";
import { DateBox } from "../DateBox";
import { DateOptions } from "../DateOptions";
import useCalenderRangePicker from "./useCalenderRangePicker";

interface ICalenderRangePicker {
	show: boolean;
	onClose: () => void;
	onChange: (start: Date | string, end: Date | string) => void;
	name: string;
}

function CalenderRangePicker({ show, onClose, onChange, name }: ICalenderRangePicker) {
	const {
		startDate,
		endDate,
		onSelectDateToggle,
		currentMonthView,
		dateInputState,
		setCurrentMonthView,
		onSelectRangeOption,
		selectedRangeOption,
		setStartDate,
		setEndDate,
		onDateOptionChange,
		setDateInputState,
	} = useCalenderRangePicker({ name });

	return (
		<Modal destroyOnClose open={show} onCancel={onClose} closable={false} className="custom-rangepicker" footer={null}>
			<div className="flex flex-col custom-datepicker">
				<div className="flex">
					<DateOptions selectedRangeOption={selectedRangeOption} onClick={onDateOptionChange} />
					<div className="flex flex-col flex-1">
						<div className="flex border-b border-[#F4F7F9]">
							<CalendarPicker
								className="border-r border-[#F4F7F9]"
								onDateSelect={(e) => onSelectDateToggle(e)}
								startDate={startDate}
								endDate={endDate}
								monthView={currentMonthView}
								onChangeMonth={(e) => setCurrentMonthView(e)}
								type="start"
							/>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-between p-4">
					<div className="flex items-center gap-3">
						<DateBox
							value={startDate}
							dateInputState="start"
							activeDateInputState={dateInputState}
							onChange={(date) => {
								setStartDate(date);
								setDateInputState("end");
								onSelectRangeOption();
							}}
						/>
						<span>-</span>
						<DateBox
							value={endDate}
							dateInputState="end"
							activeDateInputState={dateInputState}
							onChange={(date) => {
								setEndDate(date);
								setDateInputState("start");
								onSelectRangeOption();
							}}
						/>
					</div>
					<div className="flex items-center gap-3">
						<Button.Text size="small" onClick={onClose}>
							Cancel
						</Button.Text>
						<Button size="small" onClick={() => onChange(startDate.toISOString(), endDate.toISOString())}>
							Apply
						</Button>
					</div>
				</div>
			</div>
		</Modal>
	);
}

export default memo(CalenderRangePicker);
