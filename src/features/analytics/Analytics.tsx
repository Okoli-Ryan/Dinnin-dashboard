import PageWrapper from "@/components/PageWrapper";

import AnalyticsCardSection from "./components/AnalyticsCardSection";
import AnalyticsChartSection from "./components/AnalyticsLineChartSection";
import OrdersBarChart from "./components/AnalyticsLineChartSection/components/OrdersBarChart";
import OrdersLineChart from "./components/AnalyticsLineChartSection/components/OrdersLineChart";
import OrderItemsChart from "./components/OrderItemsChart/OrderItemsChart";

export default function Analytics() {
	return (
		<PageWrapper title="Analytics" subtitle="Get insights on your restaurant analytics">
			<div className="flex flex-col gap-8">
				<AnalyticsCardSection />
				<AnalyticsChartSection showDateRangeControl>
					<OrdersLineChart />
				</AnalyticsChartSection>
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					<div className="col-span-3 lg:col-span-2">
						<AnalyticsChartSection showIntervalControl showYearDropdown>
							<OrdersBarChart />
						</AnalyticsChartSection>
					</div>
					<div className="col-span-3 lg:col-span-1">
						<OrderItemsChart />
					</div>
				</div>
			</div>
		</PageWrapper>
	);
}
