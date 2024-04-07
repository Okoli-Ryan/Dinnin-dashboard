import { Form } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useGetAdminPermissionsQuery, useUpdateAdminPermissionsMutation } from "@/api/AdminApi/Admin.api";
import { useGetPermissionsQuery } from "@/api/PermissionApi/Permission.api";
import { arraysHaveSameValues, reportErrorMessage, reportSuccessMessage } from "@/core/Utils";

export default function useStaffPermissions() {
	const { id } = useParams();
	const [form] = Form.useForm();

	const { data: allPermissions, isLoading: isAllPermissionsLoading, isError: isGetAllPermissionsError } = useGetPermissionsQuery();
	const { data: adminPermissions, isLoading: isAdminPermissionsLoading, isError: isGetAdminPermissionsError } = useGetAdminPermissionsQuery(id!);
	const [updatePermissions, { isLoading: isUpdatePermissionsLoading }] = useUpdateAdminPermissionsMutation();

	async function onUpdatePermissions() {
		const permissionIds = form.getFieldValue("permissions");

		if (arraysHaveSameValues(permissionIds, adminPermissions?.permissions || [])) {
			reportSuccessMessage("Permissions have not changed");
			return;
		}

		try {
			await updatePermissions({ adminId: id!, permissionIds }).unwrap();
			reportSuccessMessage("Permissions Updated");
		} catch (error) {
			reportErrorMessage("Unable to update permissions");
		}
	}

	useEffect(() => {
		if (isGetAdminPermissionsError || isGetAllPermissionsError) {
			reportErrorMessage("Unable to fetch Admin Permissions");
		}
	}, [isGetAdminPermissionsError, isGetAllPermissionsError]);

	return {
		isLoading: isAdminPermissionsLoading || isAllPermissionsLoading,
		permissions: allPermissions || {},
		adminPermissions: adminPermissions || DEFAULT_ADMIN_PERMISSIONS,
		form,
		onUpdatePermissions,
		isUpdatePermissionsLoading,
	};
}

const DEFAULT_ADMIN_PERMISSIONS = {
	adminName: "",
	permissions: [],
};
