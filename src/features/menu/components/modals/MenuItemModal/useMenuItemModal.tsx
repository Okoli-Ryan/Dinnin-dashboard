import { useForm } from "antd/es/form/Form";
import React from "react";

import { useSaveMenuItemMutation, useUpdateMenuItemMutation } from "../../../../../api/MenuItem.api";
import { reportErrorMessage } from "../../../../../core/Utils";
import { IMenuItem } from "../../../../../models/MenuItem";
import { useAppSelector } from "../../../../../store/Store";
import { useMenuItemContext } from "../../../context/MenuItemProvider/MenuItemContext";

interface IUseMenuItemModal {
	onAddSuccess: (e: IMenuItem) => void;
	onEditSuccess: (e: IMenuItem, previousCategoryId: string) => void;
}

export default function useMenuItemModal({ onAddSuccess, onEditSuccess }: IUseMenuItemModal) {
	const [form] = useForm();
	const { id: restaurantId } = useAppSelector((state) => state.restaurant)!;
	const { currentMenuItem, setCurrentMenuItem } = useMenuItemContext();
	const [saveMenuItem, { isLoading: isSaveLoading }] = useSaveMenuItemMutation();
	const [updateMenuItem, { isLoading: isUpdateLoading }] = useUpdateMenuItemMutation();
	const isModalOpen = !!currentMenuItem;

	const inEditMode = currentMenuItem?.inEditMode;

	async function addMenuItem() {
		try {
			const payload = { ...currentMenuItem, ...form.getFieldsValue(), restaurantId };

			const addedMenuItem = await saveMenuItem(payload).unwrap();

			onAddSuccess(addedMenuItem);
			onClose();
		} catch (error) {
			reportErrorMessage(error);
		}
	}

	async function editMenuItem() {
		try {
			const payload = { ...currentMenuItem!, ...form.getFieldsValue() };

			const edittedMenuItem = await updateMenuItem(payload).unwrap();

			onEditSuccess(edittedMenuItem, currentMenuItem?.menuCategoryId!);
			onClose();
		} catch (error) {
			reportErrorMessage(error);
		}
	}

	function handleMenuItemModal() {
		if (inEditMode) editMenuItem();
		else addMenuItem();
	}

	function onClose() {
		setCurrentMenuItem(null);
	}

	return { isModalOpen, currentMenuItem, onClose, form, inEditMode, onFinish: handleMenuItemModal, isLoading: isSaveLoading || isUpdateLoading };
}
