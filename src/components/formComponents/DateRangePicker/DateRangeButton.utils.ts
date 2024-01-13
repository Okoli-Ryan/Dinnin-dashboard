import { format, parseISO, toDate } from "date-fns";

export const formatRangeDateFormat = ({ startDate, endDate }: { startDate: string; endDate: string }) => {
	return `${format(parseISO(startDate), "MMM d, yyyy")} - ${format(parseISO(endDate), "MMM d, yyyy")}`;
};
