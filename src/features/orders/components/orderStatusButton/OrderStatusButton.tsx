import React from "react";

import { Button } from "@/components";
import { IOrder, OrderStatus } from "@/models/Order";

import useOrderStatusButton from "./useOrderStatusButton";

interface IOrderStatusButton extends IOrder {}

export default function OrderStatusButton({ ...props }: IOrderStatusButton) {
	const { orderStatus, isLoading, updateOrderAsync } = useOrderStatusButton(props);

	if (orderStatus === OrderStatus.INITIAL)
		return (
			<Button.Text loading={isLoading} onClick={() => updateOrderAsync(OrderStatus.PENDING)}>
				<span className="text-pending">Acknowledge Order</span>
			</Button.Text>
		);
	if (orderStatus === OrderStatus.PENDING)
		return (
			<Button.Text loading={isLoading} onClick={() => updateOrderAsync(OrderStatus.COMPLETED)}>
				<span className="text-success">Complete Order</span>
			</Button.Text>
		);
	if (orderStatus === OrderStatus.COMPLETED)
		return (
			<Button.Text loading={isLoading} onClick={(_) => updateOrderAsync(OrderStatus.PENDING)}>
				Restore Order
			</Button.Text>
		);

	return null;
}
