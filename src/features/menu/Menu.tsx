import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import withScrolling, { createVerticalStrength } from "react-dnd-scrolling";
import { AiOutlinePlus } from "react-icons/ai";

import { Button } from "../../components";
import LoadingComponent from "../../components/LoadingComponent";
import PageWrapper from "../../components/PageWrapper";
import withErrorBoundaryHandler from "../../hoc/WithErrorBoundaryHandler";
import CategoryCard from "./components/CategoryCard/CategoryCard";
import DeleteMenuCategoryModal from "./components/modals/DeleteMenuCategoryModal";
import MenuCategoryModal from "./components/modals/MenuCategoryModal/MenuCategoryModal";
import MenuItemModal from "./components/modals/MenuItemModal/MenuItemModal";
import { DeleteMenuItemProvider } from "./context/DeleteMenuItemProvider";
import { MenuCategoryProvider } from "./context/MenuCategoryContext";
import { MenuItemProvider } from "./context/MenuItemProvider/MenuItemProvider";
import useMenu from "./useMenu";

const ScrollingComponent = withScrolling("div");
const Menu = () => {
	const { showMenuCategoryModal, categoryList, moveCard, isLoading, addCategory } = useMenu();

	if (isLoading) return <LoadingComponent />;

	return (
		<PageWrapper title="Menu" subtitle="Sort and Manage your restaurant menu">
			<MenuCategoryModal onSuccess={addCategory} />
			<Button icon={<AiOutlinePlus />} className="flex items-center gap-4 px-4 w-max" onClick={showMenuCategoryModal}>
				Add Category
			</Button>
			<MenuItemProvider>
				<DeleteMenuItemProvider>
					<MenuItemModal />
					<DeleteMenuCategoryModal />
					<DndProvider backend={HTML5Backend}>
						<ScrollingComponent
							className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-h-[28rem] overflow-auto mt-4 "
							verticalStrength={createVerticalStrength(500)}>
							{categoryList.map((categoryItem, index) => (
								<CategoryCard menuCategory={categoryItem} {...categoryItem} key={categoryItem.id} moveCard={moveCard} index={index} />
							))}
						</ScrollingComponent>
					</DndProvider>
				</DeleteMenuItemProvider>
			</MenuItemProvider>
		</PageWrapper>
	);
};

const MenuComponent = () => (
	<MenuCategoryProvider>
		<Menu />
	</MenuCategoryProvider>
);

export default withErrorBoundaryHandler(MenuComponent);
