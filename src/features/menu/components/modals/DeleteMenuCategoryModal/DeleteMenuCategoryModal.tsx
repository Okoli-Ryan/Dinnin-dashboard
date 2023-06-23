import { Modal } from "antd";
import React from "react";

import useDeleteMenuCategoryModal from "./useDeleteMenuCategoryModal";

export default function DeleteMenuCategoryModal() {
	const { isOpen, closeModal } = useDeleteMenuCategoryModal();

	return (
		<Modal centered open={isOpen} onCancel={closeModal}>
			<h3>Are you sure you want to delete this category?</h3>
		</Modal>
	);
}
