import { formatCurrency } from "@/core/Utils";

import { AnalyticsCard } from "./components";
import useAnalyticsCardSection from "./useAnalyticsCardSection";

export default function AnalyticsCardSection() {
	const { analyticsCardResponse, isLoading } = useAnalyticsCardSection();

	const { completedOrders, completedOrderItems, totalRevenue } = analyticsCardResponse;

	return (
		<div className="grid grid-cols-3 gap-8">
			<AnalyticsCard isLoading={isLoading} label="Total Orders" value={completedOrders.total} change={completedOrders.percentageChange} />
			<AnalyticsCard isLoading={isLoading} label="Total Items ordered" value={completedOrderItems.total} change={completedOrderItems.percentageChange} />
			<AnalyticsCard isLoading={isLoading} label="Total Revenue" value={formatCurrency(totalRevenue.total)} change={totalRevenue.percentageChange} />
		</div>
	);
}
