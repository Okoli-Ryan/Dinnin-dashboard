import { Form, Input } from 'antd';
import { NamePath } from 'antd/es/form/interface';
import React, { ComponentProps, InputHTMLAttributes } from 'react';

import PhoneInput from "./PhoneInput";

interface ITextInput extends ComponentProps<typeof Form["Item"]> {
    name: NamePath
	inputProps?: ComponentProps<typeof Input>;
    placeholder?: string
	labelClassName?: InputHTMLAttributes<HTMLParagraphElement>["className"];
	containerClassName?: InputHTMLAttributes<HTMLParagraphElement>["className"];
}


function TextInput({ label, labelClassName, containerClassName, name, inputProps, placeholder, className, ...props }: ITextInput) {
	return (
		<Form.Item label={label || name} name={name} {...props}>
			<Input
				className={`placeholder:capitalize !rounded-none ${className}`}
				name={name as string}
				placeholder={(placeholder || label || name) as string}
				{...inputProps}
			/>
		</Form.Item>
	);
}

function PasswordInput({ label, labelClassName, containerClassName, name, inputProps, placeholder, className, ...props }: ITextInput) {
	return (
		<Form.Item label={label || name} name={name} {...props}>
			<Input.Password
				className={`placeholder:capitalize !rounded-none ${className}`}
				placeholder={(placeholder || label || name) as string}
				name={name as string}
				{...inputProps}
			/>
		</Form.Item>
	);
}

TextInput.Password = PasswordInput;

export { TextInput };
