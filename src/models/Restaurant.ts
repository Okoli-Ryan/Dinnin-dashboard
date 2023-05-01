import { Admin } from "./Admin/Admin";
import { BaseModel, IBaseModel } from "./BaseModel";
import { IMenuCategory } from "./MenuCategory";

export interface IRestaurant extends IBaseModel {
	restaurantName: string;
	slug: string;
	description: string;
	xCoordinate: number;
	yCoordinate: number;
	address: string;
	contactPhoneNumber: string;
	contactEmail: string;
	logoUrl: string;
	country: string;
	state: string;
	city: string;
	admins: Admin[];
	categories: IMenuCategory[];
}

export class Restaurant extends BaseModel {
	restaurantName: string;
	slug: string;
	description: string;
	xCoordinate: number;
	yCoordinate: number;
	address: string;
	contactPhoneNumber: string;
	contactEmail: string;
	logoUrl: string;
	country: string;
	state: string;
	city: string;
	admins: Admin[];
	categories: IMenuCategory[];

	constructor(props?: IRestaurant) {
		super(props);
		this.restaurantName = props?.restaurantName || "";
		this.slug = props?.slug || "";
		this.description = props?.description || "";
		this.xCoordinate = props?.xCoordinate || 0;
		this.yCoordinate = props?.yCoordinate || 0;
		this.address = props?.address || "";
		this.contactPhoneNumber = props?.contactPhoneNumber || "";
		this.contactEmail = props?.contactEmail || "";
		this.logoUrl = props?.logoUrl || "";
		this.country = props?.country || "";
		this.state = props?.state || "";
		this.city = props?.city || "";
		this.admins = props?.admins || [];
		this.categories = props?.categories || [];
	}
}
