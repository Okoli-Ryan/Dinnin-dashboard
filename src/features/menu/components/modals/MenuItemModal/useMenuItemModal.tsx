import React from "react";

import { useMenuItemContext } from "../../../context/MenuItemContext";

export default function useMenuItemModal() {
	const { currentMenuItem, setCurrentMenuItem } = useMenuItemContext();
	const isModalOpen = !!currentMenuItem;

	function onClose() {
		setCurrentMenuItem(null);
	}

	return { isModalOpen, currentMenuItem, onClose };
}
