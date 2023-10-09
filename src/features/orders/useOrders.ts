import React, { useEffect, useState } from "react";

import { useGetActiveOrdersQuery } from "@/api/OrderApi";
import { IOrder } from "@/models/Order";

export default function useOrders() {
	const { data, isLoading, fulfilledTimeStamp } = useGetActiveOrdersQuery();
	const [orderList, setOrderList] = useState<IOrder[]>([]);
	const [expandedRowKey, setExpandedRowKey] = useState<string[]>([]);

	useEffect(() => {
		if (data) {
			setOrderList(data);
		}
		if (data && data.length > 0) {
			setExpandedRowKey([data[0].id]);
		}
	}, [fulfilledTimeStamp]);

	function onExpandedRowClick(rowKey: string) {
		if (expandedRowKey[0] === rowKey) {
			console.log("expandedRowKey", expandedRowKey);
			setExpandedRowKey([]);
			return;
		}
		setExpandedRowKey([rowKey]);
	}

	return { orderList, isLoading, onExpandedRowClick, expandedRowKey };
}

// TODO Create Orders Api file
