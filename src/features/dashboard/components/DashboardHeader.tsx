import { Dropdown, Layout, MenuProps } from "antd";
import { memo, useMemo } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

import { useLazyLogoutQuery } from "@/api/AdminApi/Admin.api";
import { BaseAPI } from "@/api/common";
import { DEMO_CREDENTIALS, DEMO_RESTAURANT_CODE } from "@/core/Constants";
import { ParseRestaurantUrl } from "@/features/tables/modals/TableModal/components/utils/ParseTableUrl";

import { Button } from "../../../components";
import { useAppDispatch, useAppSelector } from "../../../store";
import { clearAdmin } from "../../../store/models/Admin.store";
import { clearRestaurant } from "../../../store/models/Restaurant.store";

const DashboardHeader = () => {
	const { firstName } = useAppSelector((state) => state.admin)!;
	const items = useMemo(() => menuItems(), []);

	return (
		<div className="flex items-center justify-between w-full">
			<h2 className="text-sm font-bold md:text-2xl">
				<span className="hidden md:inline">Welcome,</span> <span className="text-primary">{firstName}</span>
			</h2>
			<Dropdown menu={{ items }} placement="bottomLeft" arrow trigger={["click"]}>
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

const menuItems: () => MenuProps["items"] = () => {
	const dispatch = useAppDispatch();
	const { slug } = useAppSelector((state) => state.restaurant)!;
	const { emailAddress } = useAppSelector((state) => state.admin)!;
	const [logoutAsync] = useLazyLogoutQuery();

	function preview() {
		// open in new tab
		window.open(ParseRestaurantUrl(slug, DEMO_RESTAURANT_CODE), "_blank");
	}

	async function logout() {
		dispatch(clearAdmin());
		dispatch(clearRestaurant());
		dispatch(BaseAPI.util.resetApiState());
		await logoutAsync().unwrap();
	}

	const menuItems = [
		emailAddress === DEMO_CREDENTIALS.email
			? {
					key: "preview",
					label: <Button.Text className="!text-gray hover:!text-lightGray">View Restaurant</Button.Text>,
					onClick: preview,
			  }
			: null,
		{
			key: "logout",
			label: <Button.Text>Log out</Button.Text>,
			onClick: logout,
		},
	];

	return menuItems;
};

export default memo(DashboardHeader);
