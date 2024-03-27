import { Form } from "antd";
import { format } from "date-fns";
import { useState } from "react";
import { BsCalendarDate } from "react-icons/bs";

import { Button } from "@/components/Button";
import { AnalyticsControlOptionsEnum } from "@/features/analytics/components/AnalyticsLineChartSection/AnalyticsChartSection.types";
import { IAnalyticsRequestParams } from "@/models/Analytics";

import CalenderRangePicker from "./CalenderRangePicker";
import { formatRangeDateFormat } from "./DateRangeButton.utils";

interface IDateRangeButton {
	className?: string;
	onChange?: (start: Date, end: Date) => void;
	name: string;
}

const { STARTTIME, ENDTIME } = AnalyticsControlOptionsEnum;

export default function DateRangeButton({ onChange = () => {}, name, className }: IDateRangeButton) {
	const [showModal, setShowModal] = useState(false);

	const onCloseModal = () => setShowModal(false);

	const form = Form.useFormInstance();

	Form.useWatch(name, form);

	const startDate = form.getFieldValue(name)?.[STARTTIME];
	const endDate = form.getFieldValue(name)?.[ENDTIME];

	return (
		<Form.Item name={name} className={className}>
			<Button.Outline size="middle" onClick={() => setShowModal(true)} icon={<BsCalendarDate />}>
				{startDate ? formatRangeDateFormat({ startDate, endDate }) : "Select Date"}
			</Button.Outline>
			<CalenderRangePicker
				name={name}
				show={showModal}
				onClose={onCloseModal}
				onChange={(start, end) => {
					onChange(start as Date, end as Date);
					form.setFieldValue(name, { [STARTTIME]: start, [ENDTIME]: end });
				}}
			/>
		</Form.Item>
	);
}
