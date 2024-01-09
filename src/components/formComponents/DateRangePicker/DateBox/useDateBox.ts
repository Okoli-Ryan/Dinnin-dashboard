import { parse } from "date-fns";
import React, { useState } from "react";

interface IUseDateBox {
	onChange: (date: Date) => void;
}

export default function useDateBox({ onChange }: IUseDateBox) {
	const [inEditMode, setInEditMode] = useState(false);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const dateValue = event.target.value;

		if (dateValue.includes("_")) return;

		const dateObject = parse(dateValue, "dd/MM/yyyy", new Date());
		onChange(dateObject);
	};
	return { handleInputChange, inEditMode, setInEditMode };
}
