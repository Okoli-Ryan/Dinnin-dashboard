import { message } from "antd";

import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

import { IError, IHttpError } from "../interfaces/IError";
import { ErrorResponse } from "../models/Error/ErrorResponse";
import { JWT_TOKEN } from "./Constants";

export function ParseError(error?: SerializedError | FetchBaseQueryError): IError<unknown> {
	if (error && (error as FetchBaseQueryError).status === "FETCH_ERROR") {
		return new ErrorResponse();
	}

	if (error && (error as FetchBaseQueryError).status !== undefined) {
		const errorResponse = error as FetchBaseQueryError & IHttpError<unknown>;
		const response = {
			status: errorResponse.status,
			message: errorResponse?.data?.responseMessage,
			data: errorResponse.data?.responseData,
		};

		return new ErrorResponse(response);
	}

	return new ErrorResponse();
}

export const reportErrorMessage = (error: any, customMessage?: string) => {
	if (customMessage) {
		message.error(customMessage);
		return;
	}

	const errorResponse = new ErrorResponse(error);

	message.error(errorResponse.message);
};

export const getToken = () => {
	return localStorage.getItem(JWT_TOKEN);
};

export const saveToken = (value: string) => {
	localStorage.setItem(JWT_TOKEN, value);
};

export const ParseFormData = (data: Record<string, any>) => {
	const formData = new FormData();

	for (const key in data) {
		let fieldData: any = data[key];

		if (Array.isArray(fieldData)) {
			fieldData.forEach((element) => {
				formData.append(key, element);
			});
			continue;
		}
		formData.append(key, fieldData);
	}

	return formData;
};
