import { Children, useState } from "react";

import { IMenuItem } from "../../../models";
import { MenuItemContext } from "./MenuItemContext";

interface IMenuItemProvider {
	children: React.ReactNode;
}

export const MenuItemProvider = ({ children }: IMenuItemProvider) => {
	const [currentMenuItem, setCurrentMenuItem] = useState<Partial<IMenuItem> | null>(null);

	return <MenuItemContext.Provider value={{ currentMenuItem, setCurrentMenuItem }}>{children}</MenuItemContext.Provider>;
};
