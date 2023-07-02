import { IMenuCategory, IMenuItem } from "../../../../models";

export const DUMMY_MOST_POPULAR: Partial<IMenuItem>[] = [
	{
		id: "1",
		menuItemName: "Popular 1",
		price: 300,
		description: "Some details about Item 1",
		menuCategoryId: "1",
		imageUrl: "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg",
	},
	{
		id: "2",
		menuItemName: "Popular 2",
		price: 250,
		description: "Some details about Item 2",
		menuCategoryId: "1",
		imageUrl: "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg",
	},
	{
		id: "3",
		menuItemName: "Popular 3",
		price: 400,
		description: "Some details about Item 3",
		menuCategoryId: "1",
		imageUrl: "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg",
	},
];

export const DUMMY_MOST_ASKED_FOR: Partial<IMenuItem>[] = [
	{
		id: "4",
		menuItemName: "ASked for 1",
		price: 300,
		description: "Some details about Item 1",
		menuCategoryId: "2",
		imageUrl: "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg",
	},
	{
		id: "5",
		menuItemName: "Asked for 2",
		price: 250,
		description: "Some details about Item 2",
		menuCategoryId: "2",
		imageUrl: "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg",
	},
	{
		id: "6",
		menuItemName: "Asked for 3",
		price: 400,
		description: "Some details about Item 3",
		menuCategoryId: "2",
		imageUrl: "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg",
	},
];

export const DUMMY_categoryList: Partial<IMenuCategory>[] = [
	{
		categoryName: "Most Popular",
		id: "1",
		menuItems: DUMMY_MOST_POPULAR as IMenuItem[],
	},
	{
		categoryName: "Most Asked For",
		id: "2",
		menuItems: DUMMY_MOST_ASKED_FOR as IMenuItem[],
	},
];
