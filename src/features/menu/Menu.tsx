import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import withScrolling from 'react-dnd-scrolling';
import { TouchBackend } from 'react-dnd-touch-backend';
import { AiOutlinePlus, AiOutlineSortAscending } from 'react-icons/ai';

import { Button } from '../../components';
import LoadingComponent from '../../components/LoadingComponent';
import PageWrapper from '../../components/PageWrapper';
import withErrorBoundaryHandler from '../../hoc/WithErrorBoundaryHandler';
import CategoryCard from './components/CategoryCard/CategoryCard';
import DeleteMenuCategoryModal from './components/modals/DeleteMenuCategoryModal';
import MenuCategoryModal from './components/modals/MenuCategoryModal/MenuCategoryModal';
import MenuItemModal from './components/modals/MenuItemModal/MenuItemModal';
import { DeleteMenuCategoryProvider } from './context/DeleteMenuCategoryProvider';
import { DeleteMenuItemProvider } from './context/DeleteMenuItemProvider';
import { MenuCategoryProvider } from './context/MenuCategoryProvider';
import { MenuItemProvider } from './context/MenuItemProvider';
import useMenu from './useMenu';

const DndBackend = window.innerWidth < 768 ? TouchBackend : HTML5Backend;

const ScrollingComponent = withScrolling("div");
const Menu = () => {
	const {
		showMenuCategoryModal,
		categoryList,
		moveCard,
		isLoading,
		addCategory,
		editCategory,
		addMenuItem,
		editMenuItem,
		deleteCategory,
		isDraggable,
		isReorderLoading,
		toggleDraggable,
	} = useMenu();

	if (isLoading) return <LoadingComponent />;

	return (
		<PageWrapper title="Menu" subtitle="Sort and Manage your restaurant menu">
			<MenuCategoryModal onAddSuccess={addCategory} onEditSuccess={editCategory} />
			<div className="flex flex-col gap-4 md:flex-row">
				{!isDraggable && (
					<Button icon={<AiOutlinePlus />} className="flex items-center gap-4 px-4 w-max" onClick={showMenuCategoryModal}>
						Add Category
					</Button>
				)}
				{categoryList.length > 1 && (
					<Button.Outline
						icon={isDraggable ? <AiOutlineSortAscending /> : <AiOutlinePlus />}
						className="flex items-center gap-4 px-4 w-max"
						loading={isReorderLoading}
						onClick={toggleDraggable}>
						{isDraggable ? "Save order" : "Reorder items"}
					</Button.Outline>
				)}
			</div>
			<MenuItemProvider>
				<DeleteMenuCategoryProvider>
					<DeleteMenuItemProvider>
						<DeleteMenuCategoryModal onDelete={deleteCategory} />
						<DndProvider backend={DndBackend}>
							<ScrollingComponent className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-h-[28rem] overflow-auto mt-4 ">
								{categoryList.map((categoryItem, index) => (
									<CategoryCard
										menuCategory={categoryItem}
										key={categoryItem.id}
										moveCard={moveCard}
										index={index}
										isDraggable={isDraggable}
									/>
								))}
							</ScrollingComponent>
						</DndProvider>
						<MenuItemModal onAddSuccess={addMenuItem} onEditSuccess={editMenuItem} menuCategoryList={categoryList} />
					</DeleteMenuItemProvider>
				</DeleteMenuCategoryProvider>
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
