import { Dropdown, Layout, MenuProps } from "antd";
import { memo } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

import { Button } from "../../../components";

const DashboardHeader = () => {
	return (
		<div className="flex items-center justify-end">
			<Dropdown menu={{ items }} placement="bottomLeft" arrow>
				<div className="flex flex-row items-center">
					<div className="rounded-full px-4 py-4 cursor-pointer bg-white text-secondary shadow-lg flex  items-center gap-x-2 hover:!bg-[#EEEEEE] hover:!text-secondary">
						<span>
							<FaUser className="text-lg text-secondary" />
						</span>
						<span>
							<AiFillCaretDown className="text-lg text-black/70" />
						</span>
					</div>
				</div>
			</Dropdown>
		</div>
	);
};

const items: MenuProps["items"] = [
	{
		key: "1",
		label: <Button.Text>Log out</Button.Text>,
	},
];

export default memo(DashboardHeader);
