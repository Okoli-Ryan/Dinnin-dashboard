import React from "react";

import { useGetAnalyticsCardsQuery } from "@/api/AnalyticsApi";

export default function useAnalyticsCardSection() {
	const { data: analyticsCardResponse, isLoading } = useGetAnalyticsCardsQuery();

	return { analyticsCardResponse: analyticsCardResponse || INITIAL_ANALYTICS_CARD_RESPONSE, isLoading };
}

const INITIAL_ANALYTICS_CARD_RESPONSE = {
	completedOrderItems: {
		total: 0,
		percentageChange: 0,
	},
	completedOrders: {
		total: 0,
		percentageChange: 0,
	},
	totalRevenue: {
		total: 0,
		percentageChange: 0,
	},
};
