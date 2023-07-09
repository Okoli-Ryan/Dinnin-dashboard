import { NavLink } from "react-router-dom";

import { SideMenuItem } from "../Dashboard.data";

export function getItem(label: React.ReactNode, key?: string, icon?: React.ReactNode, children?: SideMenuItem[]): SideMenuItem {
	return {
		key,
		icon,
		children,
		label: (
			<NavLink to={`/${key}`} className="active">
				{label}
			</NavLink>
		),
	} as SideMenuItem;
}
