import { useForm } from 'antd/es/form/Form';
import React from 'react';

import {
	useSaveMenuCategoryMutation, useUpdateMenuCategoryMutation
} from '../../../../../api/MenuCategory.api';
import { reportErrorMessage } from '../../../../../core/Utils';
import { IMenuCategory } from '../../../../../models';
import { useAppSelector } from '../../../../../store';
import { useMenuCategoryContext } from '../../../context/MenuCategoryContext';

interface IUseMenuCategoryModal {
	onAddSuccess: (e: IMenuCategory) => void;
	onEditSuccess: (e: IMenuCategory) => void;
}

export default function useMenuCategoryModal({ onAddSuccess, onEditSuccess }: IUseMenuCategoryModal) {
	const [form] = useForm();
	const { id: restaurantId } = useAppSelector((state) => state.restaurant)!;
	const { currentMenuCategoryDetails, setCurrentMenuCategoryDetails } = useMenuCategoryContext();
	const [addMenuCategory, { isLoading: isSaveLoading }] = useSaveMenuCategoryMutation();
	const [updateMenuCategory, { isLoading: isUpdateLoading }] = useUpdateMenuCategoryMutation();

	/**
	 * @description if the menu category modal has initialValues
	 */
	const inEditMode = !!currentMenuCategoryDetails?.categoryName;

	async function addCategory() {
		try {
            console.log("Add")
			const payload = { ...form.getFieldsValue(), restaurantId };

			const addedCategory = await addMenuCategory(payload).unwrap();

			onAddSuccess(addedCategory);
		} catch (error) {
			reportErrorMessage(error);
		}
	}

	async function editCategory() {
		try {
            console.log("Edit")
			const payload = { ...form.getFieldsValue(), restaurantId };

			const edittedCategory = await updateMenuCategory(payload).unwrap();

			onEditSuccess(edittedCategory);
		} catch (error) {
			reportErrorMessage(error);
		}
	}

	function handleMenuCategoryModal() {
		if (inEditMode) editCategory();
		else addCategory();
	}

	function onCancel() {
		setCurrentMenuCategoryDetails(null);
	}

	return {
		form,
		handleMenuCategoryModal,
		isLoading: isUpdateLoading || isSaveLoading,
		isOpen: !!currentMenuCategoryDetails,
		currentMenuCategoryDetails,
		inEditMode,
		onCancel,
	};
}
