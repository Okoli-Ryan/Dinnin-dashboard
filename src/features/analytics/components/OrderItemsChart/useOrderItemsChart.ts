import { useGetOrderItemsAnalyticsQuery } from "@/api/AnalyticsApi";
import { reportErrorMessage } from "@/core/Utils";

export default function useOrderItemsChart() {
	const { data: chartData = [], isFetching: isLoading, isError } = useGetOrderItemsAnalyticsQuery();

	if (isError) {
		reportErrorMessage(null, "Unable to get analytics data");
	}

	return {
		chartData,
		isLoading,
	};
}
