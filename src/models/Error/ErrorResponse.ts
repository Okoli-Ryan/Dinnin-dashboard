import { IError, IHttpError } from "../../interfaces/IError";

export class ErrorResponse {
	status: string | number;
	message: string;
	data: unknown;

	constructor(props?: IError<any> | IHttpError<any>) {
		if (props) {
			if ("error" in props) {
				this.status = props.status;
				this.message = props.error as string;
				this.data = null;
				return;
			}
			//IHttpError
			if (!("message" in props)) {
				this.status = props.status;
				this.message = props.data?.responseMessage;
				this.data = props.data.responseData ?? null;
			} else {
				this.status = props.status;
				this.message = props.message;
				this.data = props.data ?? null;
			}
		} else {
			// Default values
			this.status = 500;
			this.message = "Something went wrong";
			this.data = null;
		}
	}
}
