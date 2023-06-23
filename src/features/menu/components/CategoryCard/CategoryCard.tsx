import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillTrashFill, BsPencilFill } from "react-icons/bs";
import { MdOutlineDragIndicator } from "react-icons/md";

import { Button, TextInput } from "../../../../components";
import { DndCardContainer } from "../../../../components/DnDCardContainer";
import { useDeleteMenuCategoryContext } from "../../context/DeleteMenuItemProvider";
import { useMenuCategoryContext } from "../../context/MenuCategoryContext";
import { useMenuItemContext } from "../../context/MenuItemProvider/MenuItemContext";
import { DUMMY_categoryList } from "./CategoryCard.dummy";
import MenuItemCard from "./components/MenuItemCard";

type ICategoryCard = { menuCategory: (typeof DUMMY_categoryList)[number] } & { index: number; moveCard: (dragIndex: number, hoverIndex: number) => void };

export default function CategoryCard({ index, moveCard, menuCategory }: ICategoryCard) {
	const { setCurrentMenuItem } = useMenuItemContext();
	const { setDeleteCategoryId } = useDeleteMenuCategoryContext();
	const { setCurrentMenuCategoryDetails } = useMenuCategoryContext();

	const { menuItems, id, categoryName } = menuCategory;

	return (
		<DndCardContainer accept="Card" index={index} id={id!} moveCard={moveCard}>
			<div className="flex flex-col rounded-md shadow-md">
				<div className="flex items-center justify-between p-4 ">
					<h5 className="font-bold text-secondary">{categoryName}</h5>
					<div className="flex items-center gap-4">
						<BsPencilFill className="text-base cursor-pointer" onClick={() => setCurrentMenuCategoryDetails(menuCategory)} />
						<BsFillTrashFill className="text-base cursor-pointer" onClick={() => setDeleteCategoryId(id!)} />
						<MdOutlineDragIndicator className="text-xl cursor-grab active:cursor-grabbing" />
					</div>
				</div>
				<div className="flex flex-col gap-4 ">
					{menuItems?.map((menuItem) => (
						<MenuItemCard {...menuItem} key={menuItem.id} />
					))}
					<Button.Outline className="justify-center" icon={<AiOutlinePlus />} onClick={() => setCurrentMenuItem({})}>
						Add item
					</Button.Outline>
				</div>
			</div>
		</DndCardContainer>
	);
}
