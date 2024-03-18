import { Form } from "antd";

import ShadowCard from "@/components/ShadowCard";
import { AnalyticsGroupByEnum } from "@/models/Analytics";

import { AnalyticsChartTypeEnum, AnalyticsControlOptionsEnum } from "./AnalyticsChartSection.types";
import { AnalyticsLineChartControl } from "./components/AnalyticsChartControl";
import { IAnalyticsChartControl } from "./components/AnalyticsChartControl/AnalyticsChartControl";
import useAnalyticsChartSection from "./useAnalyticsChartSection";

const { CHARTTYPE, GROUPBY: INTERVAL, YEAR } = AnalyticsControlOptionsEnum;

interface IAnalyticsChartSection extends IAnalyticsChartControl {}

export function AnalyticsChartSection({ children, ...props }: IAnalyticsChartSection) {
	const { form } = useAnalyticsChartSection();

	return (
		<ShadowCard className="h-full">
			<Form
				form={form}
				initialValues={{
					[CHARTTYPE]: AnalyticsChartTypeEnum.REVENUE,
					[INTERVAL]: AnalyticsGroupByEnum.MONTH,
					[YEAR]: new Date().getFullYear(),
				}}>
				<AnalyticsLineChartControl
					showDateRangeControl={props.showDateRangeControl}
					showYearDropdown={props.showYearDropdown}
					showIntervalControl={props.showIntervalControl}>
					{children}
				</AnalyticsLineChartControl>
			</Form>
		</ShadowCard>
	);
}
