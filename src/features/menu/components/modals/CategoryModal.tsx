import { Form, Modal } from "antd";
import React from "react";

import { TextInput } from "../../../../components";

interface ICategoryModal {
	onSuccess?: () => void;
	isOpen: boolean;
	onCancel?: () => void;
}

export default function CategoryModal({ onSuccess, onCancel, isOpen }: ICategoryModal) {
	return (
		<Modal centered title={<h4 className="text-xl font-bold text-secondary">Create a Menu Category</h4>} open={isOpen} onOk={onSuccess} onCancel={onCancel}>
			<Form>
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
