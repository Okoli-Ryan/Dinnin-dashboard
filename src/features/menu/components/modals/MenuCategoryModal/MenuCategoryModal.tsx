import { Form, Modal } from "antd";
import React from "react";

import { TextInput } from "../../../../../components";
import { IMenuCategory } from "../../../../../models";
import useMenuCategoryModal from "./useMenuCategoryModal";

export interface IMenuCategoryModal {
	onSuccess: (e: IMenuCategory) => void;
	isOpen: boolean;
	onCancel?: () => void;
}

export default function MenuCategoryModal({ onSuccess, onCancel, isOpen }: IMenuCategoryModal) {
	const { addCategory, form, isLoading } = useMenuCategoryModal({ onSuccess });

	return (
		<Modal
			centered
			confirmLoading={isLoading}
			title={<h4 className="text-xl font-bold text-secondary">Create a Menu Category</h4>}
			open={isOpen}
			onOk={addCategory}
			onCancel={onCancel}>
			<Form form={form}>
				<TextInput
					name="categoryName"
					placeholder="Most Popular, Starters..."
					label=""
					rules={[{ required: true, message: "Please set the name of the category" }]}
					className="h-12 mt-4 text-lg"
				/>
			</Form>
		</Modal>
	);
}
