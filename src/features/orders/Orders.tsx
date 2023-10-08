import { Space, Table } from "antd";
import { format } from "date-fns";
import { BsThreeDots } from "react-icons/bs";

import LoadingComponent from "@/components/LoadingComponent";
import { IOrder } from "@/models/Order";

import PageWrapper from "../../components/PageWrapper";
import OrderItemsList from "./components/orderItemsList";
import OrderStatusButton from "./components/orderStatusButton";
import useOrders from "./useOrders";

const { Column } = Table;
export default function Orders() {
	const { orderList, isLoading } = useOrders();

	if (isLoading) return <LoadingComponent />;

	return (
		<PageWrapper title="Orders" subtitle="View Restaurant orders">
			<Table
				dataSource={orderList}
				onRow={(record) => ({ onClick: () => console.log(record) })}
				expandable={{ expandedRowRender: (order: IOrder) => <OrderItemsList orderItems={order.orderItems} /> }}>
				<Column title="Table" key="tableName" render={(e: IOrder) => e.table.tableName} />
				<Column title="Amount Paid" dataIndex="itemPrice" key="price" />
				<Column title="Time Ordered" dataIndex="updatedAt" key="updatedAt" render={(e: Date) => format(new Date(e), "Pp")} />
				<Column
					title="Action"
					key="action"
					render={(_: any, record: IOrder) => (
						<Space>
							<OrderStatusButton {...record} />
							<BsThreeDots />
						</Space>
					)}
				/>
			</Table>
		</PageWrapper>
	);
}

// TODO change table header names
