import React from "react";

import DefaultFoodImage from "@assets/images/DefaultFoodIcon.svg";

import { IMenuItem } from "../../../../../models";
import { useMenuItemContext } from "../../../context/MenuItemProvider/MenuItemContext";

export default function MenuItemCard(menuItem: Partial<IMenuItem> & { disabled?: boolean }) {
	const { setCurrentMenuItem } = useMenuItemContext();

	function onSelectMenuItem() {
		setCurrentMenuItem({ ...menuItem, inEditMode: true });
	}

	return (
		<button
			disabled={menuItem.disabled}
			className="flex items-center justify-between p-4 cursor-pointer hover:bg-black/5"
			key={menuItem.id}
			onClick={onSelectMenuItem}>
			<div className="flex items-center gap-2">
				<img src={menuItem.imageUrl || DefaultFoodImage} alt={menuItem.menuItemName + " image"} className="w-8 h-8 rounded-full" />
				<span>{menuItem.menuItemName}</span>
			</div>
			<span>NGN {menuItem.price}</span>
		</button>
	);
}
