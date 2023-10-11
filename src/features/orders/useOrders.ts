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
	}, [fulfilledTimeStamp]);

	function onExpandedRowClick(rowKey: string) {
		if (expandedRowKey[0] === rowKey) {
			console.log("expandedRowKey", expandedRowKey);
			setExpandedRowKey([]);
			return;
		}
		setExpandedRowKey([rowKey]);
	}

	function onNewOrder(e: IOrder) {
		setOrderList((prev) => [...prev, e]);
	}

	return { orderList, isLoading, onExpandedRowClick, expandedRowKey, onNewOrder };
}

// TODO Create Orders Api file
