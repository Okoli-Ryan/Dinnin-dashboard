import { useForm } from "antd/es/form/Form";
import React from "react";

import { useSaveMenuCategoryMutation } from "../../../../../api/MenuCategory.api";
import { reportErrorMessage } from "../../../../../core/Utils";
import { IMenuCategory } from "../../../../../models";
import { useAppSelector } from "../../../../../store";
import { useMenuCategoryContext } from "../../../context/MenuCategoryContext";

interface IUseMenuCategoryModal {
	onSuccess: (e: IMenuCategory) => void;
}

export default function useMenuCategoryModal({ onSuccess }: IUseMenuCategoryModal) {
	const [form] = useForm();
	const { id: restaurantId } = useAppSelector((state) => state.restaurant)!;
	const { currentMenuCategoryDetails, setCurrentMenuCategoryDetails } = useMenuCategoryContext();
	const [addMenuCategory, { isLoading }] = useSaveMenuCategoryMutation();

	console.log(currentMenuCategoryDetails);

	async function addCategory() {
		try {
			const payload = { ...form.getFieldsValue(), restaurantId };

			const addedCategory = await addMenuCategory(payload).unwrap();

			onSuccess(addedCategory);
		} catch (error) {
			reportErrorMessage(error);
		}
	}

	function onCancel() {
		setCurrentMenuCategoryDetails(null);
	}

	return { form, addCategory, isLoading, isOpen: !!currentMenuCategoryDetails, currentMenuCategoryDetails, onCancel };
}
