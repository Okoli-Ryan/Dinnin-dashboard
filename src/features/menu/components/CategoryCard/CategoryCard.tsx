import React from "react";
import { MdOutlineDragIndicator } from "react-icons/md";

import { DndCardContainer } from "../../../../components/DnDCardContainer";
import { DUMMY_categoryList } from "./CategoryCard.dummy";
import MenuItemCard from "./components/MenuItemCard";

type ICategoryCard = (typeof DUMMY_categoryList)[number] & { index: number; moveCard: (dragIndex: number, hoverIndex: number) => void };

export default function CategoryCard({ categoryName, menuItems, index, id, moveCard }: ICategoryCard) {
	return (
		<DndCardContainer accept="Card" index={index} id={id!} moveCard={moveCard}>
			<div className="flex flex-col rounded-md shadow-md">
				<div className="flex items-center justify-between p-4">
					<h5 className="font-bold text-secondary">{categoryName}</h5>
					<MdOutlineDragIndicator className="text-xl cursor-grab active:cursor-grabbing" />
				</div>
				<div className="flex flex-col gap-4 ">
					{menuItems?.map((menuItem) => (
						<MenuItemCard {...menuItem} />
					))}
				</div>
			</div>
		</DndCardContainer>
	);
}
