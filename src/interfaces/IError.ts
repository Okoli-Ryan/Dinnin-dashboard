export interface IError<T> {
	status: number | string;
	message: string;
	data: T | null;
}

export interface IHttpError<T> {
	data: { responseCode: string; responseData: T | null; responseMessage: string };
	status: number;
}
