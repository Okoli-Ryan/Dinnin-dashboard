import { Form } from "antd";

import { AnalyticsControlOptionsEnum } from "./AnalyticsChartSection.types";

const { CHARTTYPE, INTERVAL } = AnalyticsControlOptionsEnum;

export default function useAnalyticsChartSection() {
	const [form] = Form.useForm();

	Form.useWatch([INTERVAL], form);
	Form.useWatch([CHARTTYPE], form);

	return { form };
}
