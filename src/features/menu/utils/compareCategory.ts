import { IMenuCategory, IMenuItem } from "@/models";

export function compareCategory(initialArray: IMenuCategory[], finalArray: IMenuCategory[]) {
	console.log({ initialArray, finalArray });
	const changedItems = [];

	// Create a map of items from the final array for efficient lookup
	const finalArrayMap = new Map(finalArray.map((item, index) => [item.id, { ...item, sortingOrder: index }]));

	for (const initialItem of initialArray) {
		const finalItem = finalArrayMap.get(initialItem.id);

		if (finalItem && initialItem.sortingOrder !== finalItem.sortingOrder) {
			changedItems.push(initialItem);
		}
	}

	return changedItems;
}
