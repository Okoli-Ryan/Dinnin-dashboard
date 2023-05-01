import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

import { IError, IHttpError } from "../interfaces/IError";
import { ErrorResponse } from "../models/Error/ErrorResponse";

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
