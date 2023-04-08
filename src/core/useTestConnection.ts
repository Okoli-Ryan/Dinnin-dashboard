import Pusher from 'pusher-js';
import React, { useEffect } from 'react';

import { PUSHER_APP_CLUSTER, PUSHER_APP_KEY } from './Constants';

export default function useTestConnection() {
	useEffect(() => {
		const pusher = new Pusher(PUSHER_APP_KEY, {
			cluster: PUSHER_APP_CLUSTER,
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
