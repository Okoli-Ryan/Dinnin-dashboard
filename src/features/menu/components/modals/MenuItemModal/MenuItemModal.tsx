import { Form, Modal } from "antd";
import React from "react";

import { TextInput } from "../../../../../components";
import UploadImage from "../../../../../components/formComponents/ImageUpload/components/UploadImage";
import Select from "../../../../../components/formComponents/Select";
import { DUMMY_categoryList } from "../../CategoryCard/CategoryCard.dummy";
import useMenuItemModal from "./useMenuItemModal";

export default function MenuItemModal() {
	const { isModalOpen, currentMenuItem, onClose, form, onFinish } = useMenuItemModal();

	console.log({ currentMenuItem });

	return (
		<Modal
			destroyOnClose
			centered
			open={isModalOpen}
			onCancel={onClose}
			title={<h4 className="text-xl font-bold text-secondary">Edit your menu item</h4>}
			onOk={onFinish}>
			<Form layout="vertical" onFinish={onFinish} form={form} initialValues={currentMenuItem!} preserve={false}>
				<UploadImage folderName="file" name="imageUrl" />
				<TextInput name="menuItemName" label="Item name" />
				<div className="grid grid-cols-5 gap-4">
					<div className="col-span-3">
						<Select label="Select Category" name="menuCategoryId" valueKey="id" labelKey="categoryName" options={DUMMY_categoryList} />
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
