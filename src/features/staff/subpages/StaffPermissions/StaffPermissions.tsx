import { Checkbox, Form } from 'antd';
import React, { useEffect } from 'react';

import { Button } from '@/components';
import LoadingComponent from '@/components/LoadingComponent';
import PageWrapper from '@/components/PageWrapper';

import PermissionFormItem from './components/PermissionFormItem';
import useStaffPermissions from './useStaffPermissions';

export default function StaffPermissions() {
	const { form, isLoading, permissions, adminPermissions, onUpdatePermissions, isUpdatePermissionsLoading } = useStaffPermissions();

	Form.useWatch([], form);

	if (isLoading) return <LoadingComponent />;

	return (
		<PageWrapper title={`Manage Permissions for ${adminPermissions.adminName}`} subtitle="Select the permissions you want to give to this user">
			<Form form={form} initialValues={{ permissions: adminPermissions.permissions }} onFinish={onUpdatePermissions}>
				<Form.Item name={"permissions"}>
					<Checkbox.Group className="w-full">
						<div className="grid justify-center w-full grid-cols-1 gap-6 md:grid-cols-3">
							{Object.entries(permissions).map(([category, permissions]) => (
								<PermissionFormItem key={category} category={category} permissions={permissions} />
							))}
						</div>
					</Checkbox.Group>
				</Form.Item>
				<div className="mt-12">
					<Button htmlType="submit" loading={isUpdatePermissionsLoading}>
						Update
					</Button>
				</div>
			</Form>
		</PageWrapper>
	);
}
