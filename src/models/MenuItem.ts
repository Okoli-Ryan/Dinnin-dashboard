import { IBaseModel } from "./BaseModel";

export interface IMenuItem extends IBaseModel {
	menuItemName: string;
	price: number;
	menuCategoryId: string;
	restaurantId: string;
	imageUrl: string;
	description: string;
}
