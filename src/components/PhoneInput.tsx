//@ts-nocheck

import React from "react";
import PhoneInputComponent from "react-phone-input-2";

export default function PhoneInput({ value, onChange, name, label, isRequired }: IPhoneInput) {
	return (
		<section className="flex flex-col gap-2 mb-6">
			<label htmlFor={name}>{label || name || "Phone Number"}</label>
			<PhoneInputComponent
				id={name}
				country={"us"}
				value={value}
				inputProps={{ required: isRequired }}
				onChange={onChange}
				inputClass="!w-full !rounded-none hover:!border-primary focus:!border-primary duration-50 transition-color"
			/>
		</section>
	);
}

interface IPhoneInput {
	onChange?: (e: string) => void;
	value?: string;
	name?: string;
	label?: string;
	isRequired?: boolean;
}
