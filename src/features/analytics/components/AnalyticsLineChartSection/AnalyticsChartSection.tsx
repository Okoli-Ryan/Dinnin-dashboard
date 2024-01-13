import { Form } from "antd";
import React from "react";

import ShadowCard from "@/components/ShadowCard";

import { AnalyticsChartTypeEnum, AnalyticsLineChartIntervalOptionsEnum } from "./AnalyticsChartSection.types";
import { AnalyticsLineChartControl } from "./components/AnalyticsChartControl";
import useAnalyticsChartSection from "./useAnalyticsChartSection";

interface IAnalyticsChartSection {
	children: React.ReactNode;
	showIntervalControl?: boolean;
	showChartTypeControl?: boolean;
}

export function AnalyticsChartSection({ children, showChartTypeControl = true, showIntervalControl = true }: IAnalyticsChartSection) {
	const { form } = useAnalyticsChartSection();

	return (
		<ShadowCard className="h-full">
			<Form
				form={form}
				name="chart"
				initialValues={{
					chartType: AnalyticsChartTypeEnum.REVENUE,
					interval: AnalyticsLineChartIntervalOptionsEnum.MONTHLY,
				}}>
				<AnalyticsLineChartControl showIntervalControl={showIntervalControl} showChartTypeControl={showChartTypeControl}>
					{children}
				</AnalyticsLineChartControl>
			</Form>
		</ShadowCard>
	);
}
