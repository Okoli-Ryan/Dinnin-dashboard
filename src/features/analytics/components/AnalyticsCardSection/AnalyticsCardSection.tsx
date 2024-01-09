import { formatCurrency } from "@/core/Utils";

import { AnalyticsCard } from "./components";

export default function AnalyticsCardSection() {
	return (
		<div className="grid grid-cols-3 gap-8">
			<AnalyticsCard label="Total Orders" value={26} change={0} />
			<AnalyticsCard label="Total Items ordered" value={34} change={20} />
			<AnalyticsCard label="Total Revenue" value={formatCurrency(2500)} change={-40} />
		</div>
	);
}
