import { NavLink } from "react-router-dom";

import { MenuItem } from "../Dashboard.data";

export function getItem(label: React.ReactNode, key?: string, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
	return {
		key,
		icon,
		children,
		label: (
			<NavLink to={`/${key}`} className="active">
				{label}
			</NavLink>
		),
	} as MenuItem;
}
