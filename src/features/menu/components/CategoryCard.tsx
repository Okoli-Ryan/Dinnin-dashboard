import React from "react";
import { MdOutlineDragIndicator } from "react-icons/md";

import { DndCardContainer } from "../../../components/DnDCardContainer";
import { DUMMY_categoryList } from "./CategoryCard.dummy";

type ICategoryCard = (typeof DUMMY_categoryList)[number] & { index: number; moveCard: (dragIndex: number, hoverIndex: number) => void };

export default function CategoryCard({ categoryName, menuItems, index, id, moveCard }: ICategoryCard) {
	return (
		<DndCardContainer accept="Card" index={index} id={id!} moveCard={moveCard}>
			<div className="flex flex-col p-4 rounded-md shadow-md">
				<div className="flex items-center justify-between">
					<h5 className="font-bold text-secondary">{categoryName}</h5>
					<MdOutlineDragIndicator className="text-xl cursor-grab active:cursor-grabbing" />
				</div>
				<div className="flex flex-col gap-4 mt-4">
					{menuItems?.map((menuItem) => (
						<div className="flex items-center justify-between py-2" key={menuItem.id}>
							<div className="flex items-center gap-2">
								<img src={menuItem.imageUrl} alt={menuItem.menuItemName + " image"} className="w-8 h-8 rounded-full" />
								<span>{menuItem.menuItemName}</span>
							</div>
							<span>NGN {menuItem.price}</span>
						</div>
					))}
				</div>
			</div>
		</DndCardContainer>
	);
}
