//@ts-nocheck

import { Form } from "antd";
import React from "react";
import PhoneInputComponent from "react-phone-input-2";

export default function PhoneInput({ value, onChange, name, label, isRequired, onChangeValue = (e) => {} }: IPhoneInput) {
	return (
		<Form.Item name={name} label={label || "Phone Number"} required={isRequired}>
			<PhoneInputComponent
				value={value}
				country="ng"
				inputProps={{ required: isRequired }}
				onChange={(number: string, e: OnChangeValueProps) => {
					onChange(`+${number}`);
					onChangeValue(e);
				}}
				inputClass="!w-full !rounded-none hover:!border-primary focus:!border-primary duration-50 transition-color"
			/>
		</Form.Item>
	);
}

interface IPhoneInput {
	onChange: (e: string) => void;
	onChangeValue?: (e: OnChangeValueProps) => void;
	value: string;
	name: string;
	label?: string;
	isRequired?: boolean;
}

interface OnChangeValueProps {
	countryCode: string;
	dialCode: string;
	format: string;
	name: string;
}
