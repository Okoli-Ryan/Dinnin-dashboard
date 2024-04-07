import { Form } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useGetAdminPermissionsQuery } from "@/api/AdminApi/Admin.api";
import { useGetPermissionsQuery } from "@/api/PermissionApi/Permission.api";
import { reportErrorMessage } from "@/core/Utils";

export default function useStaffPermissions() {
	const { id } = useParams();
	const [form] = Form.useForm();

	const {
		data: allPermissions,
		isLoading: isAllPermissionsLoading,
		isError: isGetAllPermissionsError,
		error: getAllPermissionsError,
	} = useGetPermissionsQuery();
	const {
		data: adminPermissions,
		isLoading: isAdminPermissionsLoading,
		isError: isGetAdminPermissionsError,
		error: getAdminPermissionsError,
	} = useGetAdminPermissionsQuery(id!);

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
	};
}

const DEFAULT_ADMIN_PERMISSIONS = {
	adminName: "",
	permissions: [],
};
