import update from "immutability-helper";
import React, { useCallback, useEffect, useState } from "react";

import { useFetchMenuCategoriesQuery } from "../../api/MenuCategory.api";
import { reportErrorMessage } from "../../core/Utils";
import { IMenuCategory } from "../../models";
import { DUMMY_categoryList } from "./components/CategoryCard/CategoryCard.dummy";
import { useMenuCategoryContext } from "./context/MenuCategoryContext";

export default function useMenu() {
	const { data = [], isLoading, error, isError } = useFetchMenuCategoriesQuery();
	const { setCurrentMenuCategoryDetails } = useMenuCategoryContext();
	const [categoryList, setCategoryList] = useState(DUMMY_categoryList);

	// if (isError) throw error;

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

	function editCategory(e: IMenuCategory) {
		setCategoryList((prev) => {
			const previousList = [...prev];

			const edittedCategoryIndex = prev.findIndex((category) => category.id === e.id);

			previousList[edittedCategoryIndex] = e;

			return previousList;
		});
	}

	function showMenuCategoryModal() {
		setCurrentMenuCategoryDetails({});
	}

	useEffect(() => {
		moveCard(0, 0);
	}, []);

	return { categoryList, moveCard, addCategory, isLoading, showMenuCategoryModal, editCategory };
}
