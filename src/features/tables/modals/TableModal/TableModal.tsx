import { Form, Modal, QRCode, theme } from 'antd';
import React from 'react';

import { TextInput } from '@/components';
import Switch from '@/components/formComponents/Switch';
import { ITable } from '@/models/Table';

import QrCodeComponent from "./components";
import useTableModal from './useTableModal';

export interface ITableModal {
	selectedTable: Partial<ITable> | null;
	onCloseModal: () => void;
	onEditSuccess: (e: ITable) => void;
	onAddSuccess: (e: ITable) => void;
}

const { useToken } = theme;

export default function TableModal(props: ITableModal) {
	const { onFinish, form, isLoading, isOpen, inEditMode } = useTableModal(props);
	const { token } = useToken();

	const { selectedTable } = props;

	return (
		<Modal
			centered
			destroyOnClose
			confirmLoading={isLoading}
			title={<h4 className="text-xl font-bold text-secondary">{inEditMode ? "Edit" : "Create"} Table</h4>}
			open={isOpen}
			onOk={onFinish}
			onCancel={props.onCloseModal}>
			<Form form={form} layout="vertical" initialValues={props.selectedTable!} preserve={false}>
				<TextInput
					name="tableName"
					placeholder="Table Name"
					rules={[{ required: true, message: "Please set the name of the table" }]}
					className="h-12 mt-4 text-lg"
				/>
				{inEditMode && <QrCodeComponent />}
				{/* // TODO Add preview code to link here */}
				{inEditMode && (
					<Switch name="activeStatus" checkedChildren="Active" unCheckedChildren="Inactive" defaultChecked={selectedTable!.activeStatus} />
				)}
			</Form>
		</Modal>
	);
}
