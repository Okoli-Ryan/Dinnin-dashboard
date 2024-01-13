import { Form } from "antd";
import { format } from "date-fns";
import { useState } from "react";
import { BsCalendarDate } from "react-icons/bs";

import { Button } from "@/components/Button";
import { IAnalyticsRequestParams } from "@/models/Analytics";

import CalenderRangePicker from "./CalenderRangePicker";
import { formatRangeDateFormat } from "./DateRangeButton.utils";

interface IDateRangeButton {
	onChange?: (start: Date, end: Date) => void;
	name: string;
}

export default function DateRangeButton({ onChange = () => {}, name }: IDateRangeButton) {
	const [showModal, setShowModal] = useState(false);

	const onCloseModal = () => setShowModal(false);

	const form = Form.useFormInstance();

	const startDate = form.getFieldValue("startTime");
	const endDate = form.getFieldValue("endTime");

	return (
		<Form.Item>
			<Button.Outline size="middle" onClick={() => setShowModal(true)} icon={<BsCalendarDate />}>
				{startDate ? formatRangeDateFormat({ startDate, endDate }) : "Select Date"}
			</Button.Outline>
			<CalenderRangePicker
				name={name}
				show={showModal}
				onClose={onCloseModal}
				onChange={(start, end) => {
					onChange(start, end);
					form.setFieldValue("startTime", start);
					form.setFieldValue("endTime", end);
					onCloseModal();
				}}
			/>
		</Form.Item>
	);
}

// TODO add Form instance to date rangepicker
