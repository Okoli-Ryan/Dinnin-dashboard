import { Form, Modal } from "antd";

import Switch from "@/components/formComponents/Switch";
import { IMenuCategory } from "@/models";
import { TextInput } from "@components/formComponents";

import useMenuCategoryModal from "./useMenuCategoryModal";

export interface IMenuCategoryModal {
	onAddSuccess: (e: IMenuCategory) => void;
	onEditSuccess: (e: IMenuCategory) => void;
}

export default function MenuCategoryModal({ onAddSuccess, onEditSuccess }: IMenuCategoryModal) {
	const { onFinish, form, isLoading, isOpen, onCancel, currentMenuCategoryDetails, inEditMode } = useMenuCategoryModal({
		onAddSuccess,
		onEditSuccess,
	});

	return (
		<Modal
			centered
			destroyOnClose
			confirmLoading={isLoading}
			title={<h4 className="text-xl font-bold text-secondary">{inEditMode ? "Edit" : "Create"} Menu Category</h4>}
			open={isOpen}
			onOk={onFinish}
			onCancel={onCancel}>
			<Form form={form} layout="vertical" initialValues={currentMenuCategoryDetails!} preserve={false}>
				<TextInput
					name="categoryName"
					placeholder="Most Popular, Starters..."
					label=""
					rules={[{ required: true, message: "Please set the name of the category" }]}
					className="h-12 mt-4 text-lg"
				/>
				{currentMenuCategoryDetails?.categoryName && (
					<Switch
						name="activeStatus"
						checkedChildren="Active"
						unCheckedChildren="Inactive"
						defaultChecked={currentMenuCategoryDetails?.activeStatus}
					/>
				)}
			</Form>
		</Modal>
	);
}
