import Pusher from 'pusher-js';
import React, { useEffect } from 'react';

import Config from "./Config";

export default function useTestConnection() {
	useEffect(() => {
		const pusher = new Pusher(Config.VITE_PUSHER_APP_KEY, {
			cluster: Config.VITE_PUSHER_APP_CLUSTER,
		});

		const channel = pusher.subscribe("Channel");

		pusher.connection.bind("state_change", function (states: any) {
			console.log(states);
		});

		channel.bind("Event", function data(e: any) {
			console.log(e);
		});

		return () => {
			channel.unbind();
			pusher.unsubscribe("Channel");
		};
	}, []);

	return null;
}
