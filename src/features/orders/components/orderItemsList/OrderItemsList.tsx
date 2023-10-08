import { IOrderItem } from "@/models/OrderItem";

interface IOrderItemsList {
	orderItems: IOrderItem[];
}

export default function OrderItemsList({ orderItems }: IOrderItemsList) {
	return (
		<ul>
			{orderItems.map((orderItem) => (
				<li key={orderItem.id}>{orderItem.menuItemName}</li>
			))}
		</ul>
	);
}
