import { useForm } from "antd/es/form/Form";
import React from "react";

import { useSaveMenuItemMutation, useUpdateMenuItemMutation } from "../../../../../api/MenuItem.api";
import { reportErrorMessage } from "../../../../../core/Utils";
import { IMenuItem } from "../../../../../models/MenuItem";
import { useMenuItemContext } from "../../../context/MenuItemProvider/MenuItemContext";

interface IUseMenuItemModal {
	onAddSuccess: (e: IMenuItem) => void;
	onEditSuccess: (e: IMenuItem, previousCategoryId: string) => void;
}

export default function useMenuItemModal({ onAddSuccess, onEditSuccess }: IUseMenuItemModal) {
	const [form] = useForm();
	const { currentMenuItem, setCurrentMenuItem } = useMenuItemContext();
	const [saveMenuItem] = useSaveMenuItemMutation();
	const [updateMenuItem] = useUpdateMenuItemMutation();
	const isModalOpen = !!currentMenuItem;

	const inEditMode = currentMenuItem?.inEditMode;

	async function addMenuItem() {
		try {
			const payload = { ...currentMenuItem, ...form.getFieldsValue() };

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

	return { isModalOpen, currentMenuItem, onClose, form, inEditMode, onFinish: handleMenuItemModal };
}
