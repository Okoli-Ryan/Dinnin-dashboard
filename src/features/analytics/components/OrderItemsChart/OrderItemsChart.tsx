import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import ShadowCard from "@/components/ShadowCard";
import { stringToDarkColor } from "@/core/Utils";

import ChartItemLabel from "./components/ChartItemLabel";
import { DUMMY_ORDER_ITEMS_CHART_DATA } from "./OrderItemsChart.dummy";

export default function OrderItemsChart() {
	const data = DUMMY_ORDER_ITEMS_CHART_DATA;

	return (
		<ShadowCard className="flex flex-col h-full gap-4" header={<h3 className="text-base font-bold">Items Purchased</h3>}>
			<div>
				<ResponsiveContainer width="100%" height={300}>
					<PieChart width={300} height={300}>
						<Tooltip />
						<Pie
							data={data}
							dataKey="count"
							nameKey="itemName"
							cx="50%"
							cy="50%"
							innerRadius={50}
							outerRadius={80}
							fill="#82ca9d"
							label
							paddingAngle={5}>
							{data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={stringToDarkColor(entry.itemName)} />
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</div>
			<div className="flex flex-wrap justify-center gap-4">
				{data.map(({ itemName }) => (
					<ChartItemLabel label={itemName} />
				))}
			</div>
		</ShadowCard>
	);
}
