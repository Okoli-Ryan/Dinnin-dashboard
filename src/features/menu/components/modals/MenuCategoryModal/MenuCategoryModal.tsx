import { Form, Modal, Switch } from 'antd';
import React from 'react';

import { IMenuCategory } from '@models';

import { TextInput } from '../../../../../components';
import useMenuCategoryModal from './useMenuCategoryModal';

export interface IMenuCategoryModal {
	onSuccess: (e: IMenuCategory) => void;
}

export default function MenuCategoryModal({ onSuccess }: IMenuCategoryModal) {
	const { addCategory, form, isLoading, isOpen, onCancel, currentMenuCategoryDetails } = useMenuCategoryModal({ onSuccess });

	return (
		<Modal
			centered
			confirmLoading={isLoading}
			title={<h4 className="text-xl font-bold text-secondary">Create a Menu Category</h4>}
			open={isOpen}
			onOk={addCategory}
			onCancel={onCancel}>
			<Form form={form} layout="vertical" initialValues={currentMenuCategoryDetails!}>
				<TextInput
					name="categoryName"
					placeholder="Most Popular, Starters..."
					label=""
					rules={[{ required: true, message: "Please set the name of the category" }]}
					className="h-12 mt-4 text-lg"
				/>
				<Switch checkedChildren="Active" unCheckedChildren="Inactive" defaultChecked />
			</Form>
		</Modal>
	);
}
