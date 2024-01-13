import { Form } from "antd";

import { AnalyticsControlOptionsEnum } from "./AnalyticsChartSection.types";

const { CHARTTYPE, INTERVAL, STARTTIME, ENDTIME } = AnalyticsControlOptionsEnum;

export default function useAnalyticsChartSection() {
	const [form] = Form.useForm();

	Form.useWatch(INTERVAL, form);
	Form.useWatch(CHARTTYPE, form);
	Form.useWatch(STARTTIME, form);
	Form.useWatch(ENDTIME, form);

	return { form };
}
