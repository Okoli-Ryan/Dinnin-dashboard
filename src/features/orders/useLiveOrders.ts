import Pusher from "pusher-js";
import React, { useEffect, useRef, useState } from "react";

import Config from "@/core/Config";
import { IOrder } from "@/models/Order";
import { useAppSelector } from "@/store";

const Constants = {
	NEW_ORDER_EVENT: "NEW_ORDER_EVENT",
};

interface ILiveOrder {
	onNewOrder: (order: IOrder) => void;
	getActiveOrders: () => void;
}

export enum ConnectionState {
	INITIALIZED = "initialized",
	CONNECTED = "connected",
	CONNECTING = "connecting",
	FAILED = "failed",
	DISCONNECTED = "disconnected",
	UNAVAILABLE = "unavailable",
}

export default function useLiveOrders({ onNewOrder, getActiveOrders }: ILiveOrder) {
	const [connectionState, setConnectionState] = useState<ConnectionState>(ConnectionState.INITIALIZED);
	const { id: restaurantId } = useAppSelector((state) => state.restaurant)!;
	const pusher = useRef(
		new Pusher(Config.VITE_PUSHER_APP_KEY, {
			cluster: Config.VITE_PUSHER_APP_CLUSTER,
		})
	).current;

	useEffect(() => {
		return;
		const restaurantChannel = pusher.subscribe(restaurantId);

		// Get active orders on connection
		restaurantChannel.bind("pusher:subscription_succeeded", function onFetchRecentOrders() {
			getActiveOrders();
		});

		// Get Connection state
		pusher.connection.bind("state_change", function (state: { current: ConnectionState }) {
			console.log(state.current);
			setConnectionState(state.current);
		});

		// Action called when a new order is created
		restaurantChannel.bind(Constants.NEW_ORDER_EVENT, function data(e: IOrder) {
			onNewOrder(e);
		});

		return () => {
			restaurantChannel.unbind();
			pusher.unsubscribe("Channel");
		};
	}, []);

	return { connectionState };
}
