export interface IBaseModel {
	id: string;
	activeStatus: boolean;
	createdAt: Date | string;
	updatedAt: Date | string;
}

export class BaseModel {
	id: string;
	activeStatus: boolean;
	createdAt: Date | string;
	updatedAt: Date | string;

	constructor(props?: IBaseModel) {
		this.id = props?.id || "";
		this.activeStatus = props?.activeStatus || true;
		this.createdAt = props?.createdAt || "";
		this.updatedAt = props?.updatedAt || "";
	}
}
