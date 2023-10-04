import { rest } from "msw";

import { server as serverInstance} from "@/../jest/mocks/server";

import { parseUrl } from "../common";
import { setupServer } from "msw/node";

export const AdminSuccessHandlers = [
	// Successful Login
	rest.post(parseUrl("admin/login"), (req, res, ctx) => {
		return res(ctx.json({}));
	}),
];

export const mswServer = setupServer();

export const setupSuccessHandlers = () => mswServer.use(...AdminSuccessHandlers);
