import { useDeleteMenuItemMutation } from "@/api/MenuItem.api";
import { reportErrorMessage } from "@/core/Utils";
import { useDeleteMenuItemContext } from "@/features/menu/context/DeleteMenuItemProvider";

import { IDeleteMenuItemModal } from "./DeleteMenuItemModal";

export default function useDeleteMenuItemModal({ onDelete }: IDeleteMenuItemModal) {
	const { deleteItemId, setDeleteItemId } = useDeleteMenuItemContext();
	const [deleteItemAsync, { isLoading }] = useDeleteMenuItemMutation();

	function closeModal() {
		setDeleteItemId(null);
	}

	async function onDeleteItem() {
		try {
			await deleteItemAsync(deleteItemId!).unwrap();
			onDelete(deleteItemId!);
			closeModal();
		} catch (error) {
			reportErrorMessage(error, "Failed to delete Item");
		}
	}

	return { isOpen: !!deleteItemId, closeModal, onDelete, isLoading, onDeleteItem };
}
