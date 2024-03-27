import { Checkbox, Dropdown, Form, Modal } from "antd";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

import { IFilterData, IFilterItemOption } from "@/core/CommonTypes";
import { COLORS } from "@/core/Constants";

import { Button } from "../../../Button";
import { TextInput } from "../../TextInput";

interface IFilterModal {
	data: IFilterData;
	show: boolean;
	onCancel: () => void;
	onSubmit: (e: unknown) => void;
}

export function FilterModal({ data, show, onCancel = () => {}, onSubmit = (e) => {} }: IFilterModal) {
	const [form] = Form.useForm();

	function onFinish() {
		onSubmit(form.getFieldsValue());
		onCancel();
	}

	return (
		<Modal open={show} onCancel={onCancel} onOk={onFinish}>
			<Form form={form} className="flex flex-col gap-5 mb-12">
				<h4 className="text-[#021230] text-lg text-center font-extrabold mt-10">Filter by</h4>
				<div className="gap-[18px] flex flex-col mt-2.5">
					{/* SEARCH BAR */}
					{data.search && <SearchBar options={data.search} />}
					{data.filters &&
						data.filters.map((item) => (
							<div className="flex flex-col gap-3" key={item.label}>
								<p className="font-bold text-[#475467]">{item.label}</p>
								{item.multiple && <CheckboxSelector options={item.options} fieldName={item.fieldName} />}

								{/* {!item.multiple && (
								<DropdownSelector
									//   fieldProps={item.fieldProps}
									options={item.options}
									//   isLoading={isLoading}
									fieldName={item.fieldName}
								/>
							)} */}
							</div>
						))}
				</div>
				{/* <div className="grid grid-cols-2 gap-3 mt-8">
					<Button.Outline onClick={() => form.resetFields()}>Clear Filter</Button.Outline>
					<Button className="justify-center font-extrabold" onClick={() => onFinish(form.getFieldsValue())}>
						Apply Filter
					</Button>
				</div> */}
			</Form>
		</Modal>
	);
}

function SearchBar({ options }: { options: NonNullable<IFilterData["search"]> }) {
	const [searchFieldName, setSearchFieldName] = useState(options[0].fieldName);

	const menuItems = options.map((option) => ({
		key: option.fieldName,
		label: option.label,
		onClick: () => setSearchFieldName(option.fieldName),
	}));

	const selectedValue = options.find((option) => option.fieldName === searchFieldName);

	return (
		<div className="flex items-center gap-3">
			<TextInput
				placeholder={`Filter by: ${selectedValue!.label}`}
				name={searchFieldName}
				containerClassName="mb-0 w-full"
				inputProps={{ size: "large" }}
			/>
			<Dropdown menu={{ items: menuItems }}>
				<Button.Text className="flex flex-row-reverse items-center gap-3 btn-primary hover:text-white" icon={<IoChevronDown color={COLORS.primary} />}>
					{selectedValue!.label}
				</Button.Text>
			</Dropdown>
		</div>
	);
}

function CheckboxSelector({ options, fieldName }: { options: IFilterItemOption["options"]; fieldName: string }) {
	return (
		<Form.Item className="w-full !mb-0" name={fieldName}>
			<Checkbox.Group className="w-full">
				<div className="grid grid-cols-3 gap-3">
					{options.map((option) => (
						<Checkbox key={fieldName + option.value} value={option.value}>
							{option.name}
						</Checkbox>
					))}
				</div>
			</Checkbox.Group>
		</Form.Item>
	);
}

// function DropdownSelector({ options, fieldName, fieldProps = {} }) {
// 	return (
// 		<Form.Item name={fieldName}>
// 			<OptionPicker options={options} placeholder={fieldProps?.placeholder || "Select"} showSearch loading={fieldProps?.loading} {...fieldProps} />
// 		</Form.Item>
// 	);
// }
