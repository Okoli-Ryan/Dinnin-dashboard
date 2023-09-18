import update from "immutability-helper";
import React, { useCallback, useEffect, useState } from "react";

import { useFetchMenuCategoriesQuery } from "../../api/MenuCategory.api";
import { reportErrorMessage } from "../../core/Utils";
import { IMenuCategory, IMenuItem, IRestaurant } from "../../models";
import { useAppSelector } from "../../store/Store";
import { DUMMY_categoryList } from "./components/CategoryCard/CategoryCard.dummy";
import { useMenuCategoryContext } from "./context/MenuCategoryProvider";

export default function useMenu() {
	const { id } = useAppSelector((state) => state.restaurant) as IRestaurant;
	const { data = [], isLoading, error, isError, fulfilledTimeStamp } = useFetchMenuCategoriesQuery(id);
	const { setCurrentMenuCategoryDetails } = useMenuCategoryContext();
	const [categoryList, setCategoryList] = useState(data);

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

	// function editMenuItem(menuItem: IMenuItem, previousCategoryId: string) {
	// 	setCategoryList((prevCategoryList) => {
	// 		return prevCategoryList.map((category) => {
	// 			if (category.id === previousCategoryId) {
	// 				// If the user changed the category of the menu item, remove it from the previous category
	// 				return {
	// 					...category,
	// 					menuItems: category.menuItems.filter((item) => item.id !== menuItem.id),
	// 				};
	// 			} else if (category.id === menuItem.menuCategoryId) {
	// 				// If the category matches the new category, add the edited menu item to it
	// 				return {
	// 					...category,
	// 					menuItems: [...(category.menuItems || []), menuItem],
	// 				};
	// 			}
	// 			// Return unchanged categories
	// 			return category;
	// 		});
	// 	});
	// }

	//Open modal with no initial values
	function showMenuCategoryModal() {
		setCurrentMenuCategoryDetails({});
	}

	return { categoryList, moveCard, addCategory, isLoading, showMenuCategoryModal, editCategory, addMenuItem, editMenuItem, deleteCategory };
}
