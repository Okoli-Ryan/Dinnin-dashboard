import { message } from 'antd';
import { format, parseISO } from "date-fns";

import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

import { IError, IHttpError } from '../interfaces/IError';
import { ErrorResponse } from '../models/Error/ErrorResponse';
import Config from './Config';

export function ParseError(error?: SerializedError | FetchBaseQueryError): IError<unknown> {
	if (error && (error as FetchBaseQueryError).status === "FETCH_ERROR") {
		const response = {
			status: 500,
			message: "Network Error",
			data: null,
		};

		return new ErrorResponse(response);
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
	if (typeof error === "string") {
		message.error(error);
		return;
	}

	if (customMessage) {
		message.error(customMessage);
		return;
	}

	const errorResponse = new ErrorResponse(error);

	message.error(errorResponse.message);
};

export const reportSuccessMessage = (successMessage: string) => {
	message.success(successMessage);
};

export const getToken = () => {
	return localStorage.getItem(Config.VITE_JWT_TOKEN);
};

export const saveToken = (value: string) => {
	localStorage.setItem(Config.VITE_JWT_TOKEN, value);
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

export const GenerateRandomString = (length: number) => {
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let result = "";

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		result += characters.charAt(randomIndex);
	}

	return result;
};

export const formatCurrency = (value: number = 0) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "NGN",
	}).format(value);
};

export const formatDate = (date: string) => {
	return format(parseISO(date), "PP");
};

export function stringToDarkColor(inputString: string): string {
	let hash = 0;
	for (let i = 0; i < inputString.length; i++) {
		hash = inputString.charCodeAt(i) + ((hash << 5) - hash);
	}
	let color = "#";
	for (let j = 0; j < 3; j++) {
		const value = (hash >> (j * 8)) & 0xff;
		color += ("00" + Math.floor(value * 0.95).toString(16)).slice(-2); // Reduce the brightness for a darker color
	}
	return color;
}
