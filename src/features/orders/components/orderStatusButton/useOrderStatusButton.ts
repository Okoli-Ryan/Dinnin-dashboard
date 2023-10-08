import React from "react";

import { useUpdateOrderMutation } from "@/api/OrderApi";
import { reportErrorMessage } from "@/core/Utils";
import { IOrder } from "@/models/Order";

export default function useOrderStatusButton({ orderStatus: initialOrderStatus, ...props }: IOrder) {
	const [updateOrder, { isLoading }] = useUpdateOrderMutation();
	const [orderStatus, setOrderStatus] = React.useState(initialOrderStatus);

	async function updateOrderAsync(status: IOrder["orderStatus"]) {
		try {
			await updateOrder({ ...props, orderStatus: status });
			setOrderStatus(status);
		} catch (error) {
			reportErrorMessage(error, "Could not update order status");
		}
	}

	return { orderStatus, updateOrderAsync, isLoading };
}
