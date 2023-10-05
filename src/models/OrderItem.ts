import { IBaseModel } from "./BaseModel";
import { IMenuItem } from "./MenuItem";

export interface IOrderItem extends IBaseModel {
	quantity: number;
	menuItem: IMenuItem;
	orderId: string;
}
