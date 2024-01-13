import { format } from "date-fns";

export const formatRangeDateFormat = ({ startDate, endDate }: { startDate: Date; endDate: Date }) => {
	return `${format(startDate, "MMM d, yyyy")} - ${format(endDate, "MMM d, yyyy")}`;
};
