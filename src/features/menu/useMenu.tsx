import update from "immutability-helper";
import React, { useCallback, useEffect, useState } from "react";

import { useFetchMenuCategoriesQuery, useUpdateMultipleMenuCategoryMutation } from "../../api/MenuCategory.api";
import { reportErrorMessage } from "../../core/Utils";
import { IMenuCategory, IMenuItem, IRestaurant } from "../../models";
import { useAppSelector } from "../../store/Store";
import { DUMMY_categoryList } from "./components/CategoryCard/CategoryCard.dummy";
import { useMenuCategoryContext } from "./context/MenuCategoryProvider";
import { compareCategory } from "./utils/compareCategory";

export default function useMenu() {
	const { id } = useAppSelector((state) => state.restaurant) as IRestaurant;
	const { data = [], isLoading, error, isError, fulfilledTimeStamp } = useFetchMenuCategoriesQuery(id);
	const [updateMultipleMenuCategory, { isLoading: isReorderLoading }] = useUpdateMultipleMenuCategoryMutation();
	const [isDraggable, setIsDraggable] = useState(false);
	const { setCurrentMenuCategoryDetails } = useMenuCategoryContext();
	const [categoryList, setCategoryList] = useState(data);
	const [categoryListCopy, setCategoryListCopy] = useState<IMenuCategory[]>([]);

	useEffect(() => {
		setCategoryList(data);
	}, [fulfilledTimeStamp]);

	/**
	 * @description function to sort the menu category cards in order of how it'll show to users
	 */
	const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
		setCategoryList((prevCards: IMenuCategory[]) =>
			update(prevCards, {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, prevCards[dragIndex] as IMenuCategory],
				],
			})
		);
	}, []);

	function addCategory(category: IMenuCategory) {
		setCategoryList((prev) => [...prev, category]);
	}

	function editCategory(category: IMenuCategory) {
		setCategoryList((prev) => {
			const previousList = [...prev];

			const edittedCategoryIndex = prev.findIndex((e) => e.id === category.id);

			previousList[edittedCategoryIndex] = category;

			return previousList;
		});
	}

	function deleteCategory(categoryId: string) {
		setCategoryList((prev) => prev.filter((e) => e.id !== categoryId));
	}

	/**
	 * @description add menu item to appropriate menu category card
	 */
	function addMenuItem(menuItem: IMenuItem) {
		setCategoryList((prevCategoryList) => {
			return prevCategoryList.map((category) => {
				if (category.id === menuItem.menuCategoryId) {
					// Clone the category and add the new menuItem to its menuItems array
					return {
						...category,
						menuItems: [...(category.menuItems || []), menuItem],
					};
				}
				// Return unchanged categories
				return category;
			});
		});
	}

	function editMenuItem(menuItem: IMenuItem, previousCategoryId: string) {
		let newCategoryList = [...categoryList];

		const categoryIndex = newCategoryList.findIndex((category) => category.id === previousCategoryId);

		const categoryMenuItems = [...newCategoryList[categoryIndex].menuItems!];

		const edittedMenuItemIndex = categoryMenuItems.findIndex((item) => item.id === menuItem.id);

		//If user changed the category of the menu item
		if (menuItem.menuCategoryId !== previousCategoryId) {
			//delete from current category list

			const updatedCategoryMenuItems = categoryMenuItems.filter((item, index) => index !== edittedMenuItemIndex);

			newCategoryList[categoryIndex] = { ...newCategoryList[categoryIndex], menuItems: updatedCategoryMenuItems };

			setCategoryList(newCategoryList);

			//add to correct category list
			addMenuItem(menuItem);

			return;
		}

		categoryMenuItems[edittedMenuItemIndex] = menuItem;

		newCategoryList[categoryIndex] = { ...newCategoryList[categoryIndex], menuItems: categoryMenuItems };

		setCategoryList(newCategoryList);
	}

	async function reOrderCategories() {
		const { changedItems, newCategoryList } = compareCategory(categoryListCopy, categoryList);

		if (changedItems.length === 0) return;

		try {
			await updateMultipleMenuCategory(changedItems).unwrap();
			setCategoryList(newCategoryList);
		} catch (error) {
			console.log(error);
			setCategoryList(categoryListCopy);
			reportErrorMessage(error, "Failed to reorder categories");
		}
	}

	function showMenuCategoryModal() {
		setCurrentMenuCategoryDetails({});
	}

	async function toggleDraggable() {
		// if done re-ordering categoies, run the re-order to the database
		if (isDraggable) {
			await reOrderCategories();
		}

		if (!isDraggable) {
			// Set copy of the categoryList before re-ordering
			setCategoryListCopy(categoryList);
		}
		setIsDraggable((prev) => !prev);
	}

	return {
		categoryList,
		moveCard,
		addCategory,
		isLoading,
		isReorderLoading,
		showMenuCategoryModal,
		editCategory,
		addMenuItem,
		editMenuItem,
		deleteCategory,
		isDraggable,
		toggleDraggable,
	};
}
