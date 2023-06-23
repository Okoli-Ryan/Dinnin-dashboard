import { useDeleteMenuCategoryContext } from "../../../context/DeleteMenuItemProvider";

export default function useDeleteMenuCategoryModal() {
	const { deleteCategoryId, setDeleteCategoryId } = useDeleteMenuCategoryContext();

	function closeModal() {
		setDeleteCategoryId(null);
	}

	return { isOpen: !!deleteCategoryId, closeModal };
}
