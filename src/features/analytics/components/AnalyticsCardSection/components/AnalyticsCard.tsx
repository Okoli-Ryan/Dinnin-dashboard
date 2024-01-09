import { d } from "msw/lib/glossary-de6278a9";
import React from "react";

import ShadowCard from "@/components/ShadowCard";
import { COLORS } from "@/core/Constants";

interface IAnalyticsCard {
	label: string;
	value: string | number;
	change: number;
}

const changeTextColor = (change: number) => {
	if (change === 0) return COLORS.lightGray;
	return change > 0 ? COLORS.success : COLORS.danger;
};

export default function AnalyticsCard({ label, value, change }: IAnalyticsCard) {
	return (
		<ShadowCard>
			<div className="flex flex-col items-center justify-center gap-6">
				<h3 className="text-xl font-medium text-primary">{label}</h3>
				<div className="flex flex-col items-center gap-1">
					<h5 className="text-base font-bold">{value}</h5>
					<p className="text-xs font-medium" style={{ color: changeTextColor(change) }}>
						{`${Math.abs(change)}%`} {change >= 0 ? "increase" : "decrease"} since last month
					</p>
				</div>
			</div>
		</ShadowCard>
	);
}
