import { AiOutlinePlus } from 'react-icons/ai';
import { BsFillTrashFill, BsPencilFill } from 'react-icons/bs';
import { MdOutlineDragIndicator } from 'react-icons/md';

import { Button } from '@/components';
import { DndCardContainer } from '@/components/DnDCardContainer';

import { useDeleteMenuCategoryContext } from '../../context/DeleteMenuCategoryProvider';
import { useMenuCategoryContext } from '../../context/MenuCategoryProvider';
import { useMenuItemContext } from '../../context/MenuItemProvider/MenuItemContext';
import { DUMMY_categoryList } from './CategoryCard.dummy';
import MenuItemCard from './components/MenuItemCard';

type ICategoryCard = { menuCategory: (typeof DUMMY_categoryList)[number] } & {
	index: number;
	isDraggable?: boolean;
	moveCard: (dragIndex: number, hoverIndex: number) => void;
};

export default function CategoryCard({ index, moveCard, menuCategory, isDraggable }: ICategoryCard) {
	const { setCurrentMenuItem } = useMenuItemContext();
	const { setDeleteCategoryId } = useDeleteMenuCategoryContext();
	const { setCurrentMenuCategoryDetails } = useMenuCategoryContext();

	const { menuItems, id, categoryName } = menuCategory;

	return (
		<CardContainer index={index} moveCard={moveCard} isDraggable={isDraggable} menuCategory={menuCategory}>
			<div className="flex flex-col rounded-md shadow-md h-max">
				<div className="flex items-center justify-between p-4 ">
					<h5 className="font-bold text-secondary">
						{categoryName} {menuCategory.activeStatus ? <></> : <span className="text-danger"> (disabled)</span>}
					</h5>
					<div className="flex items-center gap-4">
						{!isDraggable && (
							<>
								<BsPencilFill className="text-base cursor-pointer" onClick={() => setCurrentMenuCategoryDetails(menuCategory)} />
								<BsFillTrashFill className="text-base cursor-pointer" onClick={() => setDeleteCategoryId(id!)} />
							</>
						)}
						{isDraggable && <MdOutlineDragIndicator className="text-xl cursor-grab active:cursor-grabbing" />}
					</div>
				</div>
				<div className="flex flex-col h-full gap-4">
					{menuItems?.map((menuItem) => <MenuItemCard {...menuItem} key={menuItem.id} disabled={isDraggable} />)}
					<Button.Outline
						disabled={isDraggable}
						className="justify-center mt-auto"
						icon={<AiOutlinePlus />}
						onClick={() => setCurrentMenuItem({ menuCategoryId: id, inEditMode: false })}>
						Add item
					</Button.Outline>
				</div>
			</div>
		</CardContainer>
	);
}

const CardContainer = (props: ICategoryCard & { children: React.ReactNode }) => {
	if (props.isDraggable)
		return (
			<DndCardContainer accept="Card" index={props.index} id={props.menuCategory.id!} moveCard={props.moveCard} isDraggable={props.isDraggable}>
				{props.children}
			</DndCardContainer>
		);

	return <>{props.children}</>;
};
