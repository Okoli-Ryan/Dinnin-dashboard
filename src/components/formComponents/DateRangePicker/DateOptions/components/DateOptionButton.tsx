interface IDateOptionButton {
	label: string;
	startDate: Date;
	endDate: Date;
	onSelectDateRange: (label: string, startDate: Date, endDate: Date) => void;
	selectedRangeOption?: string;
}

export function DateOptionButton({ label, startDate, endDate, onSelectDateRange, selectedRangeOption }: IDateOptionButton) {
	const SelectedStateClass = label === selectedRangeOption ? "bg-[#F9F9F9]" : "";

	return (
		<button
			className={`px-4 py-2.5 text-[#475467] text-xs font-medium leading-5 text-left hover:bg-[#F9F9F9] rounded-md ${SelectedStateClass}`}
			onClick={() => onSelectDateRange(label, startDate, endDate)}>
			{label}
		</button>
	);
}
