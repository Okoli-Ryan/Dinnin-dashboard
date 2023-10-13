import React from "react";

import { COLORS } from "@core/Constants";

import { ConnectionState } from "../../useLiveOrders";

const connectionStatusData: Record<ConnectionState, { color: string; label: string }> = {
	connected: { color: COLORS.success, label: "Connected" },
	initialized: { color: COLORS.pending, label: "Connecting" },
	disconnected: { color: COLORS.danger, label: "Disconnected" },
	connecting: { color: COLORS.pending, label: "Connecting" },
	failed: { color: COLORS.danger, label: "Network unavailable, reconnecting..." },
	unavailable: { color: COLORS.danger, label: "Network unavailable, reconnecting..." },
};

export default function ConnectionStateIndicator({ connectionState }: { connectionState: ConnectionState }) {
	const color = connectionStatusData[connectionState]?.color;
	const label = connectionStatusData[connectionState]?.label;

	return (
		<div className="self-end items-center flex flex-end gap-2 ">
			<span className={`w-3 h-3 rounded-full `} style={{ backgroundColor: color }}></span>
			<span style={{ color }} className="text-base">
				{label}
			</span>
		</div>
	);
}
