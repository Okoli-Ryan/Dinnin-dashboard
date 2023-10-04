import { rest } from "msw";

import { server } from "@/../jest/mocks/server";

import { parseUrl } from "../common";

export const AdminSuccessHandlers = [
	// Successful Login
	rest.post(parseUrl("admin/login"), (req, res, ctx) => {
		return res(ctx.json({}));
	}),
];

export const setupSuccessHandlers = () => server.use(...AdminSuccessHandlers);
