import { Modal } from "antd";

import { ITable } from "@/models";

import useDeleteTableModal from "./useDeleteTableModal";

export interface IDeleteTableModal {
	onDelete: (e: ITable) => void;
	onClose: () => void;
	selectedTable: ITable | null;
}
export default function DeleteTableModal(props: IDeleteTableModal) {
	const { isOpen, onClose, deleteTable, isLoading } = useDeleteTableModal(props);

	return (
		<Modal centered open={isOpen} onCancel={onClose} onOk={deleteTable} confirmLoading={isLoading}>
			<h3>Are you sure you want to delete this table?</h3>
		</Modal>
	);
}
