import { Space } from "antd";
import { BsEyeFill, BsFillTrashFill } from "react-icons/bs";

import { IFilterData, IQueryColumn } from "@/core/CommonTypes";
import { formatDate } from "@/core/Utils";
import { IAdmin } from "@/models";

type StaffListColumnsArgs = { onViewAdminPermissions: (id: string) => void };

export const STAFF_LIST_COLUMS = ({
  onViewAdminPermissions,
}: StaffListColumnsArgs): IQueryColumn<IAdmin> => [
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
    title: "Created At",
    key: "createdAt",
    render: (data: IAdmin) => formatDate(data.createdAt as string),
  },
  {
    title: "Actions",
    key: "actions",
    render: (data: IAdmin) => (
      <Space size="middle">
        <BsEyeFill
          className="text-base cursor-pointer"
          size={18}
          onClick={() => onViewAdminPermissions(data.id)}
        />
        <BsFillTrashFill className="text-base cursor-pointer" size={18} />
      </Space>
    ),
  },
];

export const STAFF_FILTER_OPTIONS: IFilterData = {
  search: [
    {
      label: "Name",
      fieldName: "name",
    },
    {
      label: "Email",
      fieldName: "email",
    },
    {
      label: "Phone No.",
      fieldName: "phoneNumber",
    },
  ],
};
