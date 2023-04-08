import { Form, Input } from 'antd';
import { NamePath } from 'antd/es/form/interface';
import React, { ComponentProps, InputHTMLAttributes } from 'react';

interface ITextInput extends ComponentProps<typeof Form["Item"]> {
    name: NamePath
	inputProps?: ComponentProps<typeof Input>;
    placeholder?: string
	labelClassName?: InputHTMLAttributes<HTMLParagraphElement>["className"];
	containerClassName?: InputHTMLAttributes<HTMLParagraphElement>["className"];
}

interface IPasswordInput extends ITextInput {}

function TextInput({ label, labelClassName, containerClassName, name, inputProps, placeholder, className, ...props }: ITextInput) {
	return (
		<Form.Item label={label || name}  name={name} {...props}>
			<Input className={`!rounded-none ${className}`} placeholder={(placeholder || label || name) as string} {...inputProps} />
		</Form.Item>
	);
}

function PasswordInput({ label, labelClassName, containerClassName, name, inputProps, placeholder, className, ...props }: ITextInput) {
	return (
		<Form.Item label={label || name}  name={name} {...props}>
			<Input.Password className={`!rounded-none ${className}`} placeholder={(placeholder || label || name) as string} {...inputProps} />
		</Form.Item>
	);
}

TextInput.Password = PasswordInput;

export { TextInput };
