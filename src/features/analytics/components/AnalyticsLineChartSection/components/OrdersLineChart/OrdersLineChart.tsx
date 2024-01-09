import { isDate } from "date-fns";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { COLORS } from "@/core/Constants";
import { formatDate } from "@/core/Utils";

import { AnalyticsChartTypeEnum } from "../../AnalyticsChartSection.types";
import useOrdersLineChart from "./useOrdersLineChart";

export default function OrdersLineChart() {
	const { chartType, chartData } = useOrdersLineChart();

	return (
		<ResponsiveContainer width="100%" height={300}>
			<AreaChart
				data={chartData}
				margin={{
					top: 30,
					right: 30,
					left: 0,
					bottom: 0,
				}}>
				<defs>
					<linearGradient id="data" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.8} />
						<stop offset="95%" stopColor={COLORS.secondary} stopOpacity={0} />
					</linearGradient>
				</defs>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey={({ date }) => (isDate(date) ? formatDate(date) : date)} />
				{chartType === AnalyticsChartTypeEnum.REVENUE && <YAxis type="number" label={{ value: "Revenue", position: "top", dx: 20, dy: -15 }} />}
				{chartType === AnalyticsChartTypeEnum.ORDER_COUNT && <YAxis label={{ value: "Number of orders", position: "top", dx: 25, dy: -15 }} />}
				<Tooltip />
				<Area dataKey="value" stroke={COLORS.primary} fill="url(#data)" />
			</AreaChart>
		</ResponsiveContainer>
	);
}
