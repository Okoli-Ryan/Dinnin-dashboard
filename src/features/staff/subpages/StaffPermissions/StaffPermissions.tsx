import { Form } from "antd";
import React, { useEffect } from "react";

import LoadingComponent from "@/components/LoadingComponent";
import PageWrapper from "@/components/PageWrapper";

import PermissionFormItem from "./components/PermissionFormItem";
import useStaffPermissions from "./useStaffPermissions";

export default function StaffPermissions() {
	const { form, isLoading, permissions, adminPermissions } = useStaffPermissions();

	Form.useWatch([], form);
	const values = form.getFieldsValue();

	useEffect(() => {
		console.log(values);
	}, [values]);

	if (isLoading) return <LoadingComponent />;

	return (
		<PageWrapper title="Manage User Permissions" subtitle="Select the permissions you want to give to this user">
			<Form form={form} initialValues={{ permissions: adminPermissions }}>
				<div className="grid grid-cols-3 gap-8">
					{Object.entries(permissions).map(([category, permissions]) => (
						<PermissionFormItem key={category} category={category} permissions={permissions} />
					))}
				</div>
			</Form>
		</PageWrapper>
	);
}
