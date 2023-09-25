import { IMenuCategory, IMenuItem } from "@/models";

export function compareCategory(initialArray: IMenuCategory[], finalArray: IMenuCategory[]) {
	const changedItems = [];

	const finalArrayWithSortingOrder = finalArray.map((item, index) => ({
		...item,
		sortingOrder: index,
	}));
	console.log({ initialArray, finalArrayWithSortingOrder });

	for (let i = 0; i < initialArray.length; i++) {
		const initialItem = initialArray[i];
		const finalItem = finalArrayWithSortingOrder[i];

		if (finalItem && initialItem.id !== finalItem.id) {
			changedItems.push(finalItem);
		}
	}

	return { newCategoryList: finalArrayWithSortingOrder, changedItems };
}
