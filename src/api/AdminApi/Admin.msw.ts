import { rest } from "msw";
import { setupServer } from "msw/node";

import { IResponseModel } from "@/models/ApiResponseModel";

import { parseUrl } from "../common";

export const AdminSuccessHandlers = [
	// Successful Login
	rest.post(parseUrl("admin/login"), (req, res, ctx) => {
		const apiKeyHeader = req.headers.get("x_api_key");

		expect(apiKeyHeader).not.toBeDefined();

		console.log({ apiKeyHeader });

		return res(
			ctx.status(200),
			ctx.json({
				admin: {
					restaurant: 1,
				},
			})
		);
	}),
];

export const AdminErrorHandlers = [
	// Successful Login
	rest.post(parseUrl("admin/login"), (req, res, ctx) => {
		const apiKeyHeader = req.headers.get("x_api_key");

		expect(apiKeyHeader).not.toBeDefined();

		return res(
			ctx.status(403),
			ctx.json<IResponseModel>({
				responseCode: 403,
				responseMessage: "Invalid Credentials",
				data: null,
			})
		);
	}),
];

export const mswServer = setupServer();

export const setupSuccessHandlers = () => mswServer.use(...AdminSuccessHandlers);
export const setupErrorHandlers = () => mswServer.use(...AdminErrorHandlers);
