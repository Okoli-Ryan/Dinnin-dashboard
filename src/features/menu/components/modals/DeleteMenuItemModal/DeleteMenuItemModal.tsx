import { Modal } from "antd";

import useDeleteMenuItemModal from "./useDeleteMenuItemModal";

export interface IDeleteMenuItemModal {
	onDelete: (e: string) => void;
}

export default function DeleteMenuItemModal({ onDelete }: IDeleteMenuItemModal) {
	const { isOpen, closeModal, onDeleteItem, isLoading } = useDeleteMenuItemModal({ onDelete });

	return (
		<Modal centered open={isOpen} onCancel={closeModal} onOk={onDeleteItem} confirmLoading={isLoading}>
			<h3>Are you sure you want to delete this Item?</h3>
		</Modal>
	);
}
