import { IBaseModel } from "./BaseModel";
import { IOrderItem } from "./OrderItem";

export interface IOrder extends IBaseModel {
	orderNote?: string;
	price: number;
	restaurantId: string;
	userId?: string;
	tableId?: string;
	paymentOption: string;
	orderStatus: "Initial" | "Pending" | "Completed";
	orderItems: IOrderItem[];
}
