import { IBasePaginationRequest } from "@/interfaces/IListResponse";

export interface IAdminListRequest extends IBasePaginationRequest {
	name?: string;
	email?: string;
	phoneNumber?: string;
}
