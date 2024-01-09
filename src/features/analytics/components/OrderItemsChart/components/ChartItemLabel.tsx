import React from "react";

import { stringToDarkColor } from "@/core/Utils";

interface IChartItemLabel {
	label: string;
}

export default function ChartItemLabel({ label }: IChartItemLabel) {
	return (
		<div className="flex items-center gap-2">
			<span className="w-2 h-2 rounded-full" style={{ backgroundColor: stringToDarkColor(label) }}></span>
			<span>{label}</span>
		</div>
	);
}
