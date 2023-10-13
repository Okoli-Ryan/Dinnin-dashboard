import React, { useEffect, useState } from "react";

import { useLazyGetActiveOrdersQuery } from "@/api/OrderApi";
import { reportErrorMessage } from "@/core/Utils";
import { IOrder } from "@/models/Order";

import { removeDuplicates } from "./utils/RemoveDuplicates";

export default function useOrders() {
	const [fetchActiveOrders, { isLoading, isError, error }] = useLazyGetActiveOrdersQuery();
	const [orderList, setOrderList] = useState<IOrder[]>([]);
	const [expandedRowKey, setExpandedRowKey] = useState<string[]>([]);

	async function getActiveOrders() {
		const lastFetchedOrderTime = orderList.at(-1)?.createdAt as Date;

		try {
			const response = await fetchActiveOrders(lastFetchedOrderTime).unwrap();
			setOrderList((prev) => removeDuplicates([...prev, ...response]));
		} catch (error) {
			reportErrorMessage(error, "Failed to fetch active orders");
		}
	}

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

	if (isError) reportErrorMessage(error);

	return { orderList, isLoading: orderList.length === 0 && isLoading, expandedRowKey, onExpandedRowClick, getActiveOrders, onNewOrder };
}

// TODO Create Orders Api file
