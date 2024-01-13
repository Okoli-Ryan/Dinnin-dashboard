import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { COLORS } from "@/core/Constants";

import { AnalyticsChartTypeEnum } from "../../AnalyticsChartSection.types";
import useOrdersBarChart from "./useOrdersBarChart";

export default function OrdersBarChart() {
	const { chartData, isLoading, yAxisKey } = useOrdersBarChart();

	return (
		<ResponsiveContainer width="100%" height={300}>
			<BarChart
				data={chartData}
				margin={{
					top: 30,
					right: 30,
					left: 0,
					bottom: 0,
				}}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="date" />
				{yAxisKey === AnalyticsChartTypeEnum.REVENUE && <YAxis type="number" label={{ value: "Revenue", position: "top", dx: 20, dy: -15 }} />}
				{yAxisKey === AnalyticsChartTypeEnum.ORDER_COUNT && <YAxis label={{ value: "Number of orders", position: "top", dx: 25, dy: -15 }} />}
				<Tooltip />
				<Bar dataKey="value" fill={COLORS.primary + "99"} />
			</BarChart>
		</ResponsiveContainer>
	);
}
