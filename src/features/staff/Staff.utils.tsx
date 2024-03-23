import { Space } from "antd";
import { BsEyeFill, BsFillTrashFill } from "react-icons/bs";

import { IQueryColumn } from "@/core/CommonTypes";
import { IAdmin } from "@/models";

export const STAFF_LIST_COLUMS: IQueryColumn<IAdmin> = [
	{
		title: "Name",
		key: "name",
		render: (data: IAdmin) => `${data.firstName} ${data.lastName}`,
	},
	{
		title: "Email",
		key: "email",
		dataIndex: "recoveryEmail",
	},
	{
		title: "Role",
		key: "role",
		dataIndex: "position",
	},
	{
		title: "Actions",
		key: "actions",
		render: (data: IAdmin) => (
			<Space size="middle">
				<BsEyeFill className="text-base cursor-pointer" size={18} />
				<BsFillTrashFill className="text-base cursor-pointer" size={18} />
			</Space>
		),
	},
];
