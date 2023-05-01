import { IAdmin } from "./Admin";

export interface IAdminLoginResponse {
	admin: IAdmin;
	token: string;
	expiresAt: number;
}
