import { Modal } from "antd";

import useDeleteMenuCategoryModal from "./useDeleteMenuCategoryModal";

export interface IDeleteMenuCategoryModal {
	onDelete: (e: string) => void;
}

export default function DeleteMenuCategoryModal({ onDelete }: IDeleteMenuCategoryModal) {
	const { isOpen, closeModal, onDeleteCategory, isLoading } = useDeleteMenuCategoryModal({ onDelete });

	return (
		<Modal centered open={isOpen} onCancel={closeModal} onOk={onDeleteCategory} confirmLoading={isLoading}>
			<h3>Are you sure you want to delete this category?</h3>
		</Modal>
	);
}
