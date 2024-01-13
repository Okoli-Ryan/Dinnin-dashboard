import { Form } from "antd";

import { AnalyticsChartTypeEnum, AnalyticsControlOptionsEnum } from "../../AnalyticsChartSection.types";

const HEADER_LABEL = {
	[AnalyticsChartTypeEnum.REVENUE]: "Revenue from orders made",
	[AnalyticsChartTypeEnum.ORDER_COUNT]: "Number of orders made",
};

export default function useAnalyticsChartControl() {
	const form = Form.useFormInstance();

	const chartType = form.getFieldValue(AnalyticsControlOptionsEnum.CHARTTYPE) as AnalyticsChartTypeEnum;

	return { headerLabel: HEADER_LABEL[chartType] };
}
