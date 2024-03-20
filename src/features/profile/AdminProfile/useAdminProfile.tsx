import { useForm } from "antd/es/form/Form";
import React from "react";

import { useUpdateAdminMutation } from "../../../api/AdminApi/Admin.api";
import { reportErrorMessage } from "../../../core/Utils";
import { useAppSelector } from "../../../store";

export default function useAdminProfile() {
	const [form] = useForm();
	const admin = useAppSelector((state) => state.admin)!;
	const [updateAdminMutation, { isLoading }] = useUpdateAdminMutation();

	async function updateAdmin() {
		try {
			const payload = { ...form.getFieldsValue(), id: admin.id };

			await updateAdminMutation(payload).unwrap();
		} catch (error) {
			reportErrorMessage(error);
		}
	}

	return { form, updateAdmin, isLoading, admin };
}
