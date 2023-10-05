import { Space, Table } from "antd";
import React from "react";

import { IOrder } from "@/models/Order";

import PageWrapper from "../../components/PageWrapper";
import OrderStatusButton from "./components/OrderStatusButton";
import { data, OrderColumns } from "./Orders.data";

const { Column } = Table;

export default function Orders() {
	return (
		<PageWrapper title="Orders" subtitle="View Restaurant orders">
			<Table dataSource={data} onRow={(record) => ({ onClick: () => console.log(record) })}>
				<Column title="Table Name" dataIndex="tableName" key="tableName" />
				<Column title="Code" dataIndex="code" key="code" />
				<Column title="Last Updated" dataIndex="updatedAt" key="updatedAt" render={(e: Date) => format(new Date(e), "Pp")} />
				<Column title="Action" key="action" render={(_: any, record: IOrder) => <OrderStatusButton {...record} />} />
			</Table>
		</PageWrapper>
	);
}

// TODO change table header names
