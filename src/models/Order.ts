import { IBaseModel } from "./BaseModel";
import { IOrderItem } from "./OrderItem";
import { ITable } from "./Table";

export enum OrderStatus {
	INITIAL = "INITIAL",
	PENDING = "PENDING",
	COMPLETED = "COMPLETED",
}

export interface IOrder extends IBaseModel {
	orderNote?: string;
	price: number;
	restaurantId: string;
	userId?: string;
	tableId?: string;
	paymentOption: string;
	orderStatus: OrderStatus;
	table: ITable;
	orderItems: IOrderItem[];
}
