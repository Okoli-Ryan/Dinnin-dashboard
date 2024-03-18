import React from "react";

interface ICalenderButton {
	date: Date;
	className?: string;
	onClick: (date: Date) => void;
	disabled?: boolean;
}

export default function CalenderButton({ date, className, onClick, disabled }: ICalenderButton) {
	return (
		<td className={`${className} day`}>
			<button className="h-full w-full" disabled={disabled} onClick={() => onClick(date)}>
				{date.getDate()}
			</button>
		</td>
	);
}
