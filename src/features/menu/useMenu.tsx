import update from "immutability-helper";
import React, { useCallback, useEffect, useState } from "react";

import { IMenuCategory } from "../../models";
import { DUMMY_categoryList } from "./components/CategoryCard/CategoryCard.dummy";

export default function useMenu() {
	const [showCategoryModal, setShowCategoryModal] = useState(false);
	const [categoryList, setCategoryList] = useState(DUMMY_categoryList);

	const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
		setCategoryList((prevCards: Partial<IMenuCategory>[]) =>
			update(prevCards, {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, prevCards[dragIndex] as Partial<IMenuCategory>],
				],
			})
		);
	}, []);

	useEffect(() => {
		moveCard(0, 0);
	}, []);

	return { showCategoryModal, setShowCategoryModal, categoryList, moveCard };
}
