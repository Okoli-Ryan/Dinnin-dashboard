import { useGetAdminPermissionsQuery } from "@/api/AdminApi";
import { useGetPermissionsQuery } from "@/api/PermissionApi/Permission.api";
import { reportErrorMessage } from "@/core/Utils";
import { Form } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function useStaffPermissions() {
  const { id } = useParams();
  const [form] = Form.useForm()

  const {
    data: allPermissions,
    isLoading: isAllPermissionsLoading,
    isError: isGetAllPermissionsError,
  } = useGetPermissionsQuery();
  const {
    data: adminPermissions,
    isLoading: isAdminPermissionsLoading,
    isError: isGetAdminPermissionsError,
  } = useGetAdminPermissionsQuery(id!);

  useEffect(() => {
    if (isGetAdminPermissionsError || isGetAllPermissionsError) {
      reportErrorMessage("Unable to fetch Admin Permissions");
    }
  }, [isGetAdminPermissionsError, isGetAllPermissionsError]);

  return {
	isLoading: isAdminPermissionsLoading || isAllPermissionsLoading,
	permissions: allPermissions || {},
	adminPermissions: adminPermissions || {},
	form
  };
}
