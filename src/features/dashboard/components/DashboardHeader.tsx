import { Dropdown, Layout, MenuProps } from 'antd';
import { memo } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';

import { useLazyLogoutQuery } from "@/api/AdminApi/Admin.api";
import { ParseRestaurantUrl } from "@/features/tables/modals/TableModal/components/utils/ParseTableUrl";

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
					<div className="rounded-full p-4 cursor-pointer bg-white text-secondary shadow-lg flex  items-center gap-x-2 hover:!bg-[#EEEEEE] hover:!text-secondary">
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
    const { slug } = useAppSelector((state) => state.restaurant)!;
    const [logoutAsync] = useLazyLogoutQuery();

	function preview() {
		// open in new tab
		window.open(ParseRestaurantUrl(slug), "_blank");
	}

	async function logout() {
		dispatch(clearAdmin());
		dispatch(clearRestaurant());
		await logoutAsync().unwrap();
	}

	return [
		{
			key: "preview",
			label: <Button.Text className="!text-gray hover:!text-lightGray">View Restaurant</Button.Text>,
			onClick: preview,
		},
		{
			key: "logout",
			label: <Button.Text>Log out</Button.Text>,
			onClick: logout,
		},
	];
};

export default memo(DashboardHeader);
