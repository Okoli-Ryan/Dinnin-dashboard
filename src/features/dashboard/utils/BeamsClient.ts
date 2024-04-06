import { parseUrl } from "@/api/common";
import Config from "@/core/Config";
import * as PusherPushNotifications from "@pusher/push-notifications-web";

export const beamsClientInstance = new PusherPushNotifications.Client({
	instanceId: Config.VITE_BEAM_INSTANCE_ID,
});

export const beamsTokenProvider = new PusherPushNotifications.TokenProvider({
	url: parseUrl("pusher/gen-token"),
	headers: {
		x_api_key: Config.VITE_API_KEY,
	},
	credentials: "include",
});
