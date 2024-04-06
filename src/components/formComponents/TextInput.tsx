import { Form, Input } from 'antd';
import { CompoundedComponent } from "antd/es/float-button/interface";
import { NamePath } from 'antd/es/form/interface';
import React, { ComponentProps, InputHTMLAttributes } from 'react';

interface ITextInput extends ComponentProps<(typeof Form)["Item"]> {
	name: NamePath;
	disabled?: boolean;
	inputProps?: ComponentProps<typeof Input>;
	placeholder?: string;
	labelClassName?: InputHTMLAttributes<HTMLParagraphElement>["className"];
	containerClassName?: InputHTMLAttributes<HTMLParagraphElement>["className"];
}

interface ITextArea extends ComponentProps<(typeof Form)["Item"]> {
	name: NamePath;
	disabled?: boolean;
	inputProps?: ComponentProps<(typeof Input)["TextArea"]>;
	placeholder?: string;
	labelClassName?: InputHTMLAttributes<HTMLParagraphElement>["className"];
	containerClassName?: InputHTMLAttributes<HTMLParagraphElement>["className"];
}

function TextInput({ label, labelClassName, containerClassName, name, inputProps, placeholder, className, ...props }: ITextInput) {
	return (
		<Form.Item label={label} name={name} className={containerClassName} {...props}>
			<Input
				className={`placeholder:capitalize !rounded-none ${className}`}
				name={name as string}
				placeholder={(placeholder || label || name) as string}
				disabled={props.disabled}
				{...inputProps}
			/>
		</Form.Item>
	);
}

function BorderlessInput({ label, labelClassName, containerClassName, name, inputProps, placeholder, className, ...props }: ITextInput) {
	return (
		<Form.Item label={label} name={name} {...props}>
			<Input
				className={`placeholder:capitalize !rounded-none !outline-none !shadow-none  border-0 !border-r-0 !border-b-2 focus:!border-primary active:!border-primary ${className}`}
				name={name as string}
				placeholder={(placeholder || label || name) as string}
				{...inputProps}
			/>
		</Form.Item>
	);
}

function TextArea({ label, labelClassName, containerClassName, name, inputProps, placeholder, className, ...props }: ITextArea) {
	return (
		<Form.Item label={label} name={name} {...props}>
			<Input.TextArea
				className={`placeholder:capitalize !rounded-none ${className}`}
				name={name as string}
				placeholder={(placeholder || label || name) as string}
				rows={4}
				{...inputProps}
			/>
		</Form.Item>
	);
}

function PasswordInput({ label, labelClassName, containerClassName, name, inputProps, placeholder, className, ...props }: ITextInput) {
	return (
		<Form.Item label={label} name={name} {...props}>
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
TextInput.TextArea = TextArea;
TextInput.Borderless = BorderlessInput;

export { TextInput };
