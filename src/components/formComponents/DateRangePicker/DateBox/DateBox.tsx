import { format } from "date-fns";
import React, { memo, useState } from "react";
import MaskedInput from "react-text-mask";
import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";

import useDateBox from "./useDateBox";

const ACTIVE_CLASS = "shadow-lg border-[#021D4B]";
const INACTIVE_CLASS = "shadow-sm border-[#F4F7F9]";

interface IDateBox {
	dateInputState: string;
	activeDateInputState: string;
	value: Date;
	onChange: (value: Date) => void;
}

function DateBox({ dateInputState, activeDateInputState, value, onChange }: IDateBox) {
	const { handleInputChange, inEditMode, setInEditMode } = useDateBox({
		onChange,
	});

	if (!inEditMode)
		return (
			<div
				onClick={() => setInEditMode(true)}
				className={`px-3.5 py-2 5 border border-[#F4F7F9] rounded-lg leading-1 w-28 Avenir text-xs leading-6 ${
					dateInputState === activeDateInputState ? ACTIVE_CLASS : INACTIVE_CLASS
				}`}>
				{format(new Date(value), "MMM d, yyyy")}
			</div>
		);

	return (
		<MaskedInput
			// @ts-ignore
			tabIndex={"0"}
			autoFocus
			placeholder="DD/MM/YYYY"
			keepCharPositions
			onBlur={() => setInEditMode(false)}
			mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
			pipe={createAutoCorrectedDatePipe("dd/mm/yyyy")}
			defaultValue={format(new Date(value), "dd/MM/yyyy")}
			onChange={handleInputChange}
			className={`px-3.5 py-2 5 border border-[#F4F7F9] rounded-lg leading-1 w-28 Avenir text-xs leading-6 ${
				dateInputState === activeDateInputState ? ACTIVE_CLASS : INACTIVE_CLASS
			}`}
		/>
	);
}

export default memo(DateBox);
