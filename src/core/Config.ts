import { z } from "zod";

const configSchema = z.object({
	VITE_PUSHER_APP_KEY: z.string().nonempty(),
	VITE_PUSHER_APP_CLUSTER: z.string().nonempty(),
	VITE_BASE_URL: z.string().nonempty(),
	VITE_API_KEY: z.string().nonempty(),
	VITE_JWT_TOKEN: z.string().nonempty(),
	VITE_GOOGLE_MAP_KEY: z.string().nonempty(),
	VITE_USER_CLIENT_URL: z.string().nonempty(),
	VITE_BEAM_INSTANCE_ID: z.string().nonempty(),
});

const Config = configSchema.parse(import.meta.env);

export default Config;
