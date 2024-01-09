import { Form, Select as SelectInput } from "antd";
import { NamePath } from "antd/es/form/interface";
import { BaseOptionType, DefaultOptionType, SelectProps } from "antd/es/select";
import React, { ComponentProps, InputHTMLAttributes, useMemo } from "react";
import { FaChevronDown } from "react-icons/fa";

import { COLORS } from "@/core/Constants";

interface ISelect<T extends BaseOptionType | DefaultOptionType> extends ComponentProps<(typeof Form)["Item"]> {
	name: NamePath;
	options: Array<T>;
	labelKey?: keyof T;
	valueKey?: keyof T;
	inputProps?: ComponentProps<typeof SelectInput>;
	placeholder?: string;
	labelClassName?: InputHTMLAttributes<HTMLParagraphElement>["className"];
	containerClassName?: InputHTMLAttributes<HTMLParagraphElement>["className"];
	showSearch?: boolean;
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
	labelKey = "label",
	valueKey = "value",
	...props
}: ISelect<T>) {
	const form = Form.useFormInstance();
	const optionValues = useMemo(() => options.map((value) => ({ label: value[labelKey] || value, value: value[valueKey] || value })), [options]);

	return (
		<Form.Item label={label} name={name} {...props}>
			<SelectInput
				suffixIcon={<FaChevronDown color={COLORS.lightGray} size={10} />}
				showSearch={showSearch}
				className={`placeholder:capitalize !rounded-none ${className}`}
				placeholder={placeholder}
				value={form?.getFieldValue(name)}
				optionFilterProp="children"
				filterOption={(input, option) => {
					if (props.selectProps?.showSearch) {
						return option?.label?.includes(input);
					}
				}}
				options={optionValues}
				{...inputProps}
			/>
		</Form.Item>
	);
}
