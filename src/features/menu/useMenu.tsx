import update from "immutability-helper";
import React, { useCallback, useEffect, useState } from "react";

import { useFetchMenuCategoriesQuery } from "../../api/MenuCategory.api";
import { reportErrorMessage } from "../../core/Utils";
import { IMenuCategory, IMenuItem } from "../../models";
import { DUMMY_categoryList } from "./components/CategoryCard/CategoryCard.dummy";
import { useMenuCategoryContext } from "./context/MenuCategoryProvider";

export default function useMenu() {
	const { data = [], isLoading, error, isError } = useFetchMenuCategoriesQuery();
	const { setCurrentMenuCategoryDetails } = useMenuCategoryContext();
	const [categoryList, setCategoryList] = useState(DUMMY_categoryList);

	useEffect(() => {
		moveCard(0, 0);
	}, []);

	/**
	 * @description function to sort the menu category cards in order of how it'll show to users
	 */
	const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
		setCategoryList((prevCards: Partial<IMenuCategory>[]) =>
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

	/**
	 * @description add menu item to appropriate menu category card
	 */
	function addMenuItem(menuItem: IMenuItem) {
		const newCategoryList = [...categoryList];

		const categoryIndex = newCategoryList.findIndex((category) => category.id === menuItem.menuCategoryId);

		const categoryMenuItems = [...newCategoryList[categoryIndex].menuItems!];

		newCategoryList[categoryIndex].menuItems = [...categoryMenuItems, menuItem];

		setCategoryList(newCategoryList);
	}

	function editMenuItem(menuItem: IMenuItem, previousCategoryId: string) {
		const newCategoryList = [...categoryList];

		const categoryIndex = newCategoryList.findIndex((category) => category.id === previousCategoryId);

		const categoryMenuItems = [...newCategoryList[categoryIndex].menuItems!];

		const edittedMenuItemIndex = categoryMenuItems.findIndex((item) => item.id === menuItem.id);

		//If user changed the category of the menu item
		if (menuItem.menuCategoryId !== previousCategoryId) {
			//delete from current category list

			const updatedCategoryMenuItems = categoryMenuItems.filter((item, index) => index !== edittedMenuItemIndex);

			newCategoryList[categoryIndex].menuItems = updatedCategoryMenuItems;

			setCategoryList(newCategoryList);

			//add to correct category list
			addMenuItem(menuItem);

			return;
		}

		categoryMenuItems[edittedMenuItemIndex] = menuItem;

		newCategoryList[categoryIndex].menuItems = categoryMenuItems;

		setCategoryList(newCategoryList);
	}

	//Open modal with no initial values
	function showMenuCategoryModal() {
		setCurrentMenuCategoryDetails({});
	}

	return { categoryList, moveCard, addCategory, isLoading, showMenuCategoryModal, editCategory, addMenuItem, editMenuItem };
}
