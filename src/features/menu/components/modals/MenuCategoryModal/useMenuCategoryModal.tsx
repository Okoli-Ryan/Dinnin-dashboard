import { useForm } from "antd/es/form/Form";
import React from "react";

import { useSaveMenuCategoryMutation } from "../../../../../api/MenuCategory.api";
import { reportErrorMessage } from "../../../../../core/Utils";
import { IMenuCategory } from "../../../../../models";
import { useAppSelector } from "../../../../../store";

interface IUseMenuCategoryModal {
	onSuccess: (e: IMenuCategory) => void;
}

export default function useMenuCategoryModal({ onSuccess }: IUseMenuCategoryModal) {
	const [form] = useForm();
	const { id: restaurantId } = useAppSelector((state) => state.restaurant)!;
	const [addMenuCategory, { isLoading }] = useSaveMenuCategoryMutation();

	async function addCategory() {
		try {
			const payload = { ...form.getFieldsValue(), restaurantId };

			const addedCategory = await addMenuCategory(payload).unwrap();

			onSuccess(addedCategory);
		} catch (error) {
			reportErrorMessage(error);
		}
	}

	return { form, addCategory, isLoading };
}
