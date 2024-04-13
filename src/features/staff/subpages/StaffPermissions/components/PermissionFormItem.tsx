import { Checkbox, Form } from "antd";
import React from "react";

import { Permission, PermissionGroup } from "@/models/Permission";

interface IPermissionFormItem {
	category: keyof PermissionGroup;
	permissions: Permission[];
}

export default function PermissionFormItem({ category, permissions }: IPermissionFormItem) {
	return (
		<div className="flex flex-col w-full gap-3">
			<p className="text-xl font-bold">{category.replace("_", " ")}</p>
			<div className="flex flex-col gap-3 ml-4">
				{permissions.map((permission) => (
					<Checkbox key={permission.id} value={permission.id} rootClassName="!ml-0">
						{permission.permissionDescription}
					</Checkbox>
				))}
			</div>
		</div>
	);
}
