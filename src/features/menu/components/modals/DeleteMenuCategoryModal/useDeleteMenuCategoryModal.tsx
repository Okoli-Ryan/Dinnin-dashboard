import { useDeleteMenuCategoryMutation } from "@/api/MenuCategory.api";
import { reportErrorMessage } from "@/core/Utils";
import { useDeleteMenuCategoryContext } from "@/features/menu/context/DeleteMenuCategoryProvider";

import { IDeleteMenuCategoryModal } from "./DeleteMenuCategoryModal";

export default function useDeleteMenuCategoryModal({ onDelete }: IDeleteMenuCategoryModal) {
	const { deleteCategoryId, setDeleteCategoryId } = useDeleteMenuCategoryContext();
	const [deleteCategoryAsync, { isLoading }] = useDeleteMenuCategoryMutation();

	function closeModal() {
		setDeleteCategoryId(null);
	}

	async function onDeleteCategory() {
		try {
			await deleteCategoryAsync(deleteCategoryId!).unwrap();
			onDelete(deleteCategoryId!);
			closeModal();
		} catch (error) {
			reportErrorMessage(error, "Failed to delete category");
		}
	}

	return { isOpen: !!deleteCategoryId, closeModal, onDelete, isLoading, onDeleteCategory };
}
