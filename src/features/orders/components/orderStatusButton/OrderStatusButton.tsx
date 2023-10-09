import React from "react";

import { Button } from "@/components";
import { IOrder } from "@/models/Order";

import useOrderStatusButton from "./useOrderStatusButton";

interface IOrderStatusButton extends IOrder {}

export default function OrderStatusButton({ ...props }: IOrderStatusButton) {
	const { orderStatus, isLoading, updateOrderAsync } = useOrderStatusButton(props);

	if (orderStatus === "Initial")
		return (
			<Button.Text loading={isLoading} onClick={() => updateOrderAsync("Pending")}>
				<span className="text-pending">Acknowledge Order</span>
			</Button.Text>
		);
	if (orderStatus === "Pending")
		return (
			<Button.Text loading={isLoading} onClick={() => updateOrderAsync("Completed")}>
				<span className="text-success">Complete Order</span>
			</Button.Text>
		);
	if (orderStatus === "Completed")
		return (
			<Button.Text loading={isLoading} onClick={(_) => updateOrderAsync("Pending")}>
				Restore Order
			</Button.Text>
		);

	return null;
}
