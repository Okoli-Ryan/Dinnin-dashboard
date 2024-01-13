import ShadowCard from "@/components/ShadowCard";
import SkeletonLoader from "@/components/SkeletonLoader";
import { COLORS } from "@/core/Constants";

interface IAnalyticsCard {
	isLoading: boolean;
	label: string;
	value: string | number;
	change: number;
}

const changeTextColor = (change: number) => {
	if (change === 0) return COLORS.lightGray;
	return change > 0 ? COLORS.success : COLORS.danger;
};

export default function AnalyticsCard({ label, value, change, isLoading }: IAnalyticsCard) {
	return (
		<ShadowCard>
			<div className="flex flex-col items-center justify-center gap-6">
				<h3 className="text-xl font-medium items-center text-primary">{label}</h3>
				<div className="flex flex-col gap-1 items-center">
					<h5 className="text-base font-bold">
						<SkeletonLoader isLoading={isLoading}>{value}</SkeletonLoader>
					</h5>
					<p className="text-xs font-medium" style={{ color: changeTextColor(change) }}>
						<SkeletonLoader isLoading={isLoading} style={{ width: "10rem" }}>
							{`${Math.abs(change)}%`} {change >= 0 ? "increase" : "decrease"} since last month
						</SkeletonLoader>
					</p>
				</div>
			</div>
		</ShadowCard>
	);
}
