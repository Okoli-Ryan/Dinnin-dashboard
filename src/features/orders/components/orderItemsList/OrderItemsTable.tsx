import { Table } from "antd";

import { formatCurrency } from "@/core/Utils";
import { IOrderItem } from "@/models/OrderItem";

const { Column } = Table;

interface IOrderItemsList {
	orderItems: IOrderItem[];
}

export default function OrderItemsTable({ orderItems }: IOrderItemsList) {
	return (
		<Table dataSource={orderItems} pagination={false} rowKey={(e: IOrderItem) => e.id}>
			<Column title="Item Name" key="menuItemName" render={(e: IOrderItem) => e.menuItemName} />
			<Column title="Quantity" dataIndex="quantity" key="quantity" />
			<Column title="Price" dataIndex="itemPrice" key="itemPrice" render={(e: number) => formatCurrency(e)} />
			<Column title="Total" key="total" render={(_: any, record: IOrderItem) => <span>{formatCurrency(record.quantity * record.itemPrice)}</span>} />
		</Table>
	);
}
