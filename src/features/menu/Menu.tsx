import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AiOutlinePlus } from "react-icons/ai";

import { Button } from "../../components";
import PageWrapper from "../../components/PageWrapper";
import CategoryCard from "./components/CategoryCard";
import { DUMMY_categoryList } from "./components/CategoryCard.dummy";
import CategoryModal from "./components/CategoryModal";
import useMenu from "./useMenu";

export default function Menu() {
	const { showCategoryModal, setShowCategoryModal, categoryList, moveCard } = useMenu();

	return (
		<PageWrapper title="Menu" subtitle="Manage the restaurant menu">
			<CategoryModal isOpen={showCategoryModal} onCancel={() => setShowCategoryModal(false)} />
			<Button icon={<AiOutlinePlus />} className="flex items-center gap-4 px-4 w-max" onClick={() => setShowCategoryModal(true)}>
				Add Category
			</Button>
			<div className="grid grid-cols-3 gap-8 mt-8">
				<DndProvider backend={HTML5Backend}>
					{categoryList.map((categoryItem, index) => (
						<CategoryCard {...categoryItem} key={categoryItem.id} moveCard={moveCard} index={index} />
					))}
				</DndProvider>
			</div>
		</PageWrapper>
	);
}
