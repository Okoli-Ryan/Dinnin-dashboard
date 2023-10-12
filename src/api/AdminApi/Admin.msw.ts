import { rest } from "msw";

import { server as serverInstance } from "@/../jest/mocks/server";

import { parseUrl } from "../common";
import { setupServer } from "msw/node";
import { IError } from "@/interfaces/IError";
import { IApiResponseModel, IResponseModel } from "@/models/ApiResponseModel";

export const AdminSuccessHandlers = [
	// Successful Login
	rest.post(parseUrl("admin/login"), (req, res, ctx) => {

		const apiKeyHeader = req.headers.get('x-api-key')

		expect(apiKeyHeader).not.toBeDefined()

		console.log({apiKeyHeader})

		return res(ctx.status(200), ctx.json({
			admin : {
				restaurant : 1
			}
		}));
	}),
];

export const AdminErrorHandlers = [
	// Successful Login
	rest.post(parseUrl("admin/login"), (req, res, ctx) => {

		const apiKeyHeader = req.headers.get('x-api-key')

		expect(apiKeyHeader).not.toBeDefined()


		return res(ctx.status(403), ctx.json<IResponseModel>({
			responseCode: 403,
			responseMessage: "Invalid Credentials",
			data: null
		}));
	}),
];

export const mswServer = setupServer();

export const setupSuccessHandlers = () => mswServer.use(...AdminSuccessHandlers);
export const setupErrorHandlers = () => mswServer.use(...AdminErrorHandlers);
