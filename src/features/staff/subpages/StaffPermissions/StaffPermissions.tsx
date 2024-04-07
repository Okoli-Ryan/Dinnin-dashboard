import PageWrapper from "@/components/PageWrapper";
import { Form } from "antd";
import React from "react";
import useStaffPermissions from "./useStaffPermissions";
import LoadingComponent from "@/components/LoadingComponent";
import PermissionFormItem from "./components/PermissionFormItem";

export default function StaffPermissions() {
  const { form, isLoading, permissions } = useStaffPermissions();

  if (isLoading) return <LoadingComponent />;

  return (
    <PageWrapper
      title="Manage User Permissions"
      subtitle="Select the permissions you want to give to this user"
    >
      <Form form={form}>
        <div className="grid grid-cols-3">
          {Object.entries(permissions).map(([category, permissions]) => (
            <PermissionFormItem
              key={category}
              category={category}
              permissions={permissions}
            />
          ))}
        </div>
      </Form>
    </PageWrapper>
  );
}
