import { Permission, PermissionGroup } from "@/models/Permission";
import { Checkbox } from "antd";
import React from "react";

interface IPermissionFormItem {
  category: keyof PermissionGroup;
  permissions: Permission[];
}

export default function PermissionFormItem({
  category,
  permissions,
}: IPermissionFormItem) {
  return (
    <div className="flex gap-6">
      <p>{category}</p>
      <Checkbox.Group>
        <div className="flex flex-col gap-3">
          {permissions.map((permission) => (
            <Checkbox key={permission.id} value={permission.id}>
              {permission.permissionDescription}
            </Checkbox>
          ))}
        </div>
      </Checkbox.Group>
    </div>
  );
}
