import { IMenuCategory, IMenuItem } from "../../../../models";

export const DUMMY_menuList: Partial<IMenuItem>[] = [
	{
		id: "1",
		menuItemName: "Item 1",
		price: 300,
		description: "Some details about Item 1",
		menuCategoryId: "1",
		imageUrl: "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg",
	},
	{
		id: "2",
		menuItemName: "Item 2",
		price: 250,
		description: "Some details about Item 2",
		menuCategoryId: "1",
		imageUrl: "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg",
	},
	{
		id: "3",
		menuItemName: "Item 3",
		price: 400,
		description: "Some details about Item 3",
		menuCategoryId: "3",
		imageUrl: "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg",
	},
];

export const DUMMY_categoryList: Partial<IMenuCategory>[] = [
	{
		categoryName: "Most Popular",
		id: "1",
		menuItems: DUMMY_menuList as IMenuItem[],
	},
	{
		categoryName: "Most Asked For",
		id: "2",
		menuItems: DUMMY_menuList as IMenuItem[],
	},
	{
		categoryName: "Starters",
		id: "3",
		menuItems: DUMMY_menuList as IMenuItem[],
	},
	{
		categoryName: "Drinks",
		id: "4",
		menuItems: DUMMY_menuList as IMenuItem[],
	},
	{
		categoryName: "Most Popular",
		id: "5",
		menuItems: DUMMY_menuList as IMenuItem[],
	},
	{
		categoryName: "Most Asked For",
		id: "6",
		menuItems: DUMMY_menuList as IMenuItem[],
	},
	{
		categoryName: "Starters",
		id: "7",
		menuItems: DUMMY_menuList as IMenuItem[],
	},
	{
		categoryName: "Drinks",
		id: "8",
		menuItems: DUMMY_menuList as IMenuItem[],
	},
];
