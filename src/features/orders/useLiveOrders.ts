import Pusher from "pusher-js";
import React, { useEffect } from "react";

import Config from "@/core/Config";
import { IOrder } from "@/models/Order";
import { useAppSelector } from "@/store";

const Constants = {
	NEW_ORDER_EVENT: "NEW_ORDER_EVENT",
};

interface ILiveOrder {
	onNewOrder: (order: IOrder) => void;
}

export default function useLiveOrders({ onNewOrder }: ILiveOrder) {
	const { id: restaurantId } = useAppSelector((state) => state.restaurant)!;

	useEffect(() => {
		const pusher = new Pusher(Config.VITE_PUSHER_APP_KEY, {
			cluster: Config.VITE_PUSHER_APP_CLUSTER,
		});

		const channel = pusher.subscribe(restaurantId);

		pusher.connection.bind("state_change", function (states: any) {
			console.log(states);
		});

		// Action called when a new order is created
		channel.bind(Constants.NEW_ORDER_EVENT, function data(e: IOrder) {
			onNewOrder(e);
		});

		return () => {
			channel.unbind();
			pusher.unsubscribe("Channel");
		};
	}, []);

	return null;
}
