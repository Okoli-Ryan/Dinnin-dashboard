import { Form, Modal } from "antd";
import React from "react";

import { TextInput } from "../../../../../components";
import Select from "../../../../../components/Select";
import { DUMMY_categoryList } from "../../CategoryCard/CategoryCard.dummy";
import useMenuItemModal from "./useMenuItemModal";

export default function MenuItemModal() {
	const { isModalOpen, currentMenuItem, onClose } = useMenuItemModal();

	console.log(currentMenuItem);

	return (
		<Modal centered open={isModalOpen} onCancel={onClose} title={<h4 className="text-xl font-bold text-secondary">Edit your menu item</h4>}>
			<Form layout="vertical" onFinish={(values) => console.log(values)}>
				<TextInput name="menuItemName" label="Item name" />
				<div className="grid grid-cols-5 gap-4">
					<div className="col-span-3">
						<Select label="Select Category" name="categoryId" valueKey="id" labelKey="categoryName" options={DUMMY_categoryList} />
					</div>
					<div className="col-span-2">
						<TextInput name="price" label="Price" inputProps={{ type: "number" }} className="col-span-1" />
					</div>
				</div>
				<TextInput.TextArea name="description" label="description" />
			</Form>
		</Modal>
	);
}
