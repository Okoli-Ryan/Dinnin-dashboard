import { Form, Select as SelectInput } from "antd";
import useFormInstance from "antd/es/form/hooks/useFormInstance";
import { NamePath } from "antd/es/form/interface";
import { BaseOptionType, DefaultOptionType, SelectProps } from "antd/es/select";
import React, { ComponentProps, InputHTMLAttributes, useMemo } from "react";

interface ISelect<T extends BaseOptionType | DefaultOptionType> extends ComponentProps<(typeof Form)["Item"]> {
	name: NamePath;
	inputProps?: ComponentProps<typeof SelectInput>;
	placeholder?: string;
	labelClassName?: InputHTMLAttributes<HTMLParagraphElement>["className"];
	options: Array<T>;
	containerClassName?: InputHTMLAttributes<HTMLParagraphElement>["className"];
	labelKey: keyof T;
	showSearch?: boolean;
	valueKey: keyof T;
	selectProps?: SelectProps;
}

export default function Select<T extends BaseOptionType | DefaultOptionType>({
	label,
	labelClassName,
	containerClassName,
	name,
	inputProps,
	placeholder,
	options,
	className,
	showSearch,
	labelKey,
	valueKey,
	...props
}: ISelect<T>) {
	const form = useFormInstance();
	const optionValues = useMemo(() => options.map((value) => ({ label: value[labelKey] || value, value: value[valueKey] || value })), [options]);

	return (
		<Form.Item label={label} name={name} {...props}>
			<SelectInput
				showSearch={showSearch}
				className={`placeholder:capitalize !rounded-none ${className}`}
				placeholder={placeholder}
				value={form.getFieldValue(name)}
				optionFilterProp="children"
				filterOption={(input, option) => {
					if (props.selectProps?.showSearch) {
						return option?.label?.includes(input);
					}
				}}
				options={optionValues}
			/>
		</Form.Item>
	);
}
