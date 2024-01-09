import { Form } from "antd";
import { format } from "date-fns";
import { useState } from "react";
import { BsCalendarDate } from "react-icons/bs";

import { Button } from "@/components/Button";

import CalenderRangePicker from "./CalenderRangePicker";

interface IDateRangeButton {
	onChange: (start: Date, end: Date) => void;
	name: string;
}

export default function DateRangeButton({ onChange, name }: IDateRangeButton) {
	const [showModal, setShowModal] = useState(false);

	const onCloseModal = () => setShowModal(false);

	const form = Form.useFormInstance();

	const dateValue = form.getFieldValue(name);

	const formatRangeDateFormat = ({ startDate, endDate }: { startDate: Date; endDate: Date }) => {
		return `${format(startDate, "MMM d, yyyy")} - ${format(endDate, "MMM d, yyyy")}`;
	};

	return (
		<Form.Item>
			<Button.Outline size="middle" onClick={() => setShowModal(true)} icon={<BsCalendarDate />}>
				{dateValue ? formatRangeDateFormat(dateValue) : "Select Date"}
			</Button.Outline>
			<CalenderRangePicker
				name={name}
				show={showModal}
				onClose={onCloseModal}
				onChange={(start, end) => {
					onChange(start, end);
					form.setFieldValue(name, { startDate: start, endDate: end });
					onCloseModal();
				}}
			/>
		</Form.Item>
	);
}

// TODO add Form instance to date rangepicker
