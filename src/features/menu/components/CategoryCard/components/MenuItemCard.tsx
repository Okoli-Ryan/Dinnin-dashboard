import { IMenuItem } from "@/models";
import { formatCurrency } from "@core/Utils";

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
				<img src={menuItem.imageUrl || "/images/DefaultFoodIcon.svg"} alt={menuItem.menuItemName + " image"} className="w-8 h-8 rounded-full" />
				<span>{menuItem.menuItemName}</span>
			</div>
			<span>{formatCurrency(menuItem.price)}</span>
		</button>
	);
}
