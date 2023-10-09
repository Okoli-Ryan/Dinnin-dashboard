import { Space, Table } from "antd";
import { format } from "date-fns";
import { BsThreeDots } from "react-icons/bs";

import LoadingComponent from "@/components/LoadingComponent";
import { formatCurrency } from "@/core/Utils";
import { IOrder } from "@/models/Order";

import PageWrapper from "../../components/PageWrapper";
import OrderItemsTable from "./components/orderItemsList";
import OrderStatusButton from "./components/orderStatusButton";
import useOrders from "./useOrders";

const { Column } = Table;
export default function Orders() {
	const { orderList, isLoading, expandedRowKey, onExpandedRowClick } = useOrders();

	if (isLoading) return <LoadingComponent />;

	return (
		<PageWrapper title="Orders" subtitle="View Restaurant orders">
			<Table
				dataSource={orderList}
				rowKey={(e: IOrder) => e.id}
				onRow={(order, index) => ({ onClick: () => onExpandedRowClick(order.id) })}
				expandable={{
					expandedRowRender: ({ orderItems }: IOrder) => <OrderItemsTable orderItems={orderItems} />,
					indentSize: 30,
					expandedRowKeys: expandedRowKey,
				}}>
				<Column title="Table" key="tableName" render={(e: IOrder) => e.table.tableName} />
				<Column title="Amount Paid" dataIndex="price" key="price" render={(e: number) => formatCurrency(e)} />
				<Column title="Time Ordered" dataIndex="updatedAt" key="updatedAt" render={(e: Date) => format(new Date(e), "Pp")} />
				<Column
					title="Action"
					key="action"
					// colSpan={100}
					render={(_: any, record: IOrder) => (
						<Space>
							<OrderStatusButton {...record} />
							{/* <BsThreeDots /> */}
						</Space>
					)}
				/>
				{/* TODO add fixed width for orderstatus button */}
			</Table>
		</PageWrapper>
	);
}

// TODO change table header names
