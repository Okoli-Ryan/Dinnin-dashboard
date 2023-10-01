import { Space, Table } from 'antd';
import { format } from 'date-fns';
import { BsFillTrashFill, BsPencilFill } from 'react-icons/bs';

import { ITable } from '@/models/Table';

interface ITableComponent {
	data: ITable[];
	onEditClick: (e: ITable) => void;
	onDeleteClick: (e: ITable) => void;
}

const { Column } = Table;

export default function TableListComponent({ data, onDeleteClick, onEditClick }: ITableComponent) {
	return (
		<Table dataSource={data}>
			<Column title="Table Name" dataIndex="tableName" key="tableName" />
			<Column title="Code" dataIndex="code" key="code" />
			<Column title="Last Updated" dataIndex="updatedAt" key="updatedAt" render={(e: Date) => format(new Date(e), "Pp")} />
			<Column
				title="Action"
				key="action"
				render={(_: any, record: ITable) => (
					<Space size="middle">
						<BsPencilFill className="text-base cursor-pointer" onClick={() => onEditClick(record)} />
						<BsFillTrashFill className="text-base cursor-pointer" onClick={() => onDeleteClick(record)} />
					</Space>
				)}
			/>
		</Table>
	);
}
