import { Form } from "antd";
import React, { useEffect } from "react";

import LoadingComponent from "@/components/LoadingComponent";
import PageWrapper from "@/components/PageWrapper";

import PermissionFormItem from "./components/PermissionFormItem";
import useStaffPermissions from "./useStaffPermissions";

export default function StaffPermissions() {
	const { form, isLoading, permissions, adminPermissions } = useStaffPermissions();

	Form.useWatch([], form);

	if (isLoading) return <LoadingComponent />;

	return (
		<PageWrapper title={`Manage Permissions for ${adminPermissions.adminName}`} subtitle="Select the permissions you want to give to this user">
			<Form form={form} initialValues={{ permissions: adminPermissions.permissions }}>
				<div className="grid grid-cols-3 gap-8">
					{Object.entries(permissions).map(([category, permissions]) => (
						<PermissionFormItem key={category} category={category} permissions={permissions} />
					))}
				</div>
			</Form>
		</PageWrapper>
	);
}
