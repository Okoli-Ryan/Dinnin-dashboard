import { useForm } from "antd/es/form/Form";
import React from "react";

import { useMenuItemContext } from "../../../context/MenuItemProvider/MenuItemContext";

export default function useMenuItemModal() {
	const [form] = useForm();
	const { currentMenuItem, setCurrentMenuItem } = useMenuItemContext();
	const isModalOpen = !!currentMenuItem;

	function onClose() {
		setCurrentMenuItem(null);
	}

	function onFinish() {
		console.log(form.getFieldsValue());
	}

	return { isModalOpen, currentMenuItem, onClose, form, onFinish };
}
