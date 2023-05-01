import { IRestaurant, Restaurant } from '../Restaurant';
import { IUserEntity, UserEntity } from '../UserEntity';

export interface IAdmin extends IUserEntity {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	imageUrl: string;
	restaurantId?: string;
	restaurant: IRestaurant | null;
}

export class Admin extends UserEntity implements IAdmin {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	imageUrl: string;
	restaurantId?: string;
	restaurant: IRestaurant | null;

	constructor(props?: IAdmin) {
		super(props);
		this.firstName = props?.firstName || "";
		this.lastName = props?.lastName || "";
		this.phoneNumber = props?.phoneNumber || "";
		this.imageUrl = props?.imageUrl || "";
		this.restaurantId = props?.restaurantId || "";
		this.restaurant = props?.restaurant || null;
	}
}
