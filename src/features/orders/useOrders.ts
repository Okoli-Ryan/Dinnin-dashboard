import React, { useEffect, useState } from "react";

import { useGetActiveOrdersQuery } from "@/api/OrderApi";
import { IOrder } from "@/models/Order";

export default function useOrders() {
	const { data, isLoading, fulfilledTimeStamp } = useGetActiveOrdersQuery();
	const [orderList, setOrderList] = useState<IOrder[]>([]);

	useEffect(() => {
		if (data) {
			setOrderList(data);
		}
	}, [fulfilledTimeStamp]);

	return { orderList, isLoading };
}

// TODO Create Orders Api file
