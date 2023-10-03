//@ts-nocheck

import { Form } from "antd";
import React from "react";
import PI from "react-phone-input-2";

const PhoneInputComponent = PI.default ? PI.default : PI;

export default function PhoneInput({ value, name, label, isRequired, onChangeValue = (e) => {} }: IPhoneInput) {
	const form = Form.useFormInstance();

	return (
		<Form.Item name={name} label={label || "Phone Number"} required={isRequired}>
			<PhoneInputComponent
				value={form.getFieldValue("contactPhoneNumber")}
				country="ng"
				inputProps={{ required: isRequired }}
				onChange={(number: string, e: OnChangeValueProps) => {
					form.setFieldsValue({ [name]: `+${number}` });
					onChangeValue(e);
				}}
				inputClass="!w-full !rounded-none hover:!border-primary focus:!border-primary duration-50 transition-color"
			/>
		</Form.Item>
	);
}

interface IPhoneInput {
	onChangeValue?: (e: OnChangeValueProps) => void;
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
