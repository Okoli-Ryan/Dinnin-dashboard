import { Table } from "antd";
import React from "react";

import PageWrapper from "../../components/PageWrapper";
import { data, OrderColumns } from "./Orders.data";

export default function Orders() {
	return (
		<PageWrapper title="Orders" subtitle="View Restaurant orders">
			<Table
				columns={OrderColumns}
				dataSource={data}
				pagination={false}
				expandable={{
					expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.description}</p>,
				}}
			/>
		</PageWrapper>
	);
}
