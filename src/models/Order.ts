import { IBaseModel } from "./BaseModel";
import { IOrderItem } from "./OrderItem";
import { ITable } from "./Table";

export interface IOrder extends IBaseModel {
	orderNote?: string;
	price: number;
	restaurantId: string;
	userId?: string;
	tableId?: string;
	paymentOption: string;
	orderStatus: "Initial" | "Pending" | "Completed";
	table: ITable;
	orderItems: IOrderItem[];
}
