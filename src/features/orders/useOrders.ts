import { useEffect, useState } from 'react';

import { useLazyGetActiveOrdersQuery } from '@/api/OrderApi';
import { reportErrorMessage } from '@/core/Utils';
import { IOrder } from '@/models/Order';

import { removeDuplicates } from './utils/RemoveDuplicates';

export default function useOrders() {
	const [fetchActiveOrders, { isLoading, isError, error }] = useLazyGetActiveOrdersQuery();
	const [orderList, setOrderList] = useState<IOrder[]>([]);

	async function getActiveOrders() {
		const lastFetchedOrderTime = orderList.at(-1)?.createdAt as Date;

		try {
			const response = await fetchActiveOrders(lastFetchedOrderTime).unwrap();
			setOrderList((prev) => removeDuplicates([...prev, ...response]));
		} catch (error) {
			reportErrorMessage(error, "Failed to fetch active orders");
		}
	}
	function onNewOrder(e: IOrder) {
		setOrderList((prev) => [...prev, e]);
	}

	useEffect(() => {
		if (isError) reportErrorMessage(error);
	}, [isError]);

	return { orderList, isLoading: orderList.length === 0 && isLoading, getActiveOrders, onNewOrder };
}

// TODO Add Push notifications feature
// https://github.com/juliofuentescerrada/push-notifications-server-dotnet
// https://pusher.com/docs/beams/guides/publish-to-specific-user/web/
