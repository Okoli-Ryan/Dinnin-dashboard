import { Dropdown, Layout, MenuProps } from 'antd';
import { memo } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';

import { Button } from '../../../components';
import { useAppDispatch, useAppSelector } from "../../../store";
import { clearAdmin } from '../../../store/models/Admin.store';
import { clearRestaurant } from '../../../store/models/Restaurant.store';

const DashboardHeader = () => {
	const { firstName } = useAppSelector((state) => state.admin)!;

	return (
		<div className="flex items-center justify-between w-full">
			<h2 className="text-2xl font-bold">
				Welcome, <span className="text-primary">{firstName}</span>
			</h2>
			<Dropdown menu={{ items: items() }} placement="bottomLeft" arrow>
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

const items: () => MenuProps["items"] = () => {
	const dispatch = useAppDispatch();

	function logout() {
		dispatch(clearAdmin());
		dispatch(clearRestaurant());
	}

	return [
		{
			key: "1",
			label: <Button.Text>Log out</Button.Text>,
			onClick: logout,
		},
	];
};

export default memo(DashboardHeader);
