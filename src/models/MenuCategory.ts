import { IBaseModel } from "./BaseModel";
import { IMenuItem } from "./MenuItem";

export interface IMenuCategory extends IBaseModel {
	categoryName: string;
	restaurantId: string;
	menuItems: IMenuItem[];
}
