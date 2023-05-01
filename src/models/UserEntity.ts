import { BaseModel, IBaseModel } from "./BaseModel";

export interface IUserEntity extends IBaseModel {
	emailAddress: string;
	isEmailConfirmed: boolean;
	password?: string;
}

export class UserEntity extends BaseModel {
	emailAddress: string;
	isEmailConfirmed: boolean;
	password?: string;

	constructor(props?: IUserEntity) {
		super(props);
		this.emailAddress = props?.emailAddress || "";
		this.isEmailConfirmed = props?.isEmailConfirmed || false;
		this.password = props?.password || "";
	}
}
