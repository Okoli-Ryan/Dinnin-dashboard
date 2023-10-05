import React from "react";

import { Button } from "@/components";
import { IOrder } from "@/models/Order";

interface IOrderStatusButton extends IOrder {
	isLoading: boolean;
}

export default function OrderStatusButton({ orderStatus, isLoading }: IOrderStatusButton) {
	if (orderStatus === "Initial") return <Button.Text loading={isLoading}>Acknowledge</Button.Text>;
	if (orderStatus === "Pending") return <Button.Text loading={isLoading}>Complete Order</Button.Text>;
	if (orderStatus === "Completed") return <Button.Text loading={isLoading}>Remove</Button.Text>;

	return null;
}
