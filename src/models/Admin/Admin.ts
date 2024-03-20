import { IRestaurant, Restaurant } from '../Restaurant';
import { IUserEntity, UserEntity } from '../UserEntity';

export type IRoleType = "super-admin" | "admin";

export interface IAdmin extends IUserEntity {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	imageUrl: string;
	restaurantId?: string;
	restaurant: IRestaurant | null;
	role: IRoleType;
	recoveryEmail: string;
	position: string;
}

export class Admin extends UserEntity implements IAdmin {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	imageUrl: string;
	restaurantId?: string;
	role: IRoleType;
	restaurant: IRestaurant | null;
	position: string;

	recoveryEmail: string;

	constructor(props?: IAdmin) {
		super(props);
		this.firstName = props?.firstName || "";
		this.lastName = props?.lastName || "";
		this.phoneNumber = props?.phoneNumber || "";
		this.imageUrl = props?.imageUrl || "";
		this.restaurantId = props?.restaurantId || "";
		this.restaurant = props?.restaurant || null;
		this.role = props?.role || "admin";
		this.position = props?.position || "";
		this.recoveryEmail = props?.recoveryEmail || "";
	}
}
