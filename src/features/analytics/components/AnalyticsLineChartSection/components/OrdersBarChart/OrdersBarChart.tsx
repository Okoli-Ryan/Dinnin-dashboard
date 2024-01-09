import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { COLORS } from "@/core/Constants";

import useOrdersBarChart from "./useOrdersBarChart";

export default function OrdersBarChart() {
	const { chartData } = useOrdersBarChart();

	return (
		<ResponsiveContainer width="100%" height={300}>
			<BarChart data={chartData}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="date" />
				<YAxis label={{ value: "Number of orders", position: "top", dx: 25, dy: -15 }} />
				<Tooltip />
				<Bar dataKey="value" fill={COLORS.primary + "99"} />
			</BarChart>
		</ResponsiveContainer>
	);
}
