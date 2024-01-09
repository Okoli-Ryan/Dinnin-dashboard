import { NavLink } from "react-router-dom";

import { SideMenuItem } from "../Dashboard.data";

/**
 *
 * @param label The label to be shown on the sidebar menu
 * @param key The key of the sidebar menuItem
 * @param icon The icon of the sidebar menuItem
 * @param children Submenu items
 * @returns
 */
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
