import { createContext, SetStateAction, useContext } from "react";

import { IMenuItem } from "../../../../models";

interface IMenuItemContext {
	currentMenuItem: Partial<IMenuItem> | null;
	setCurrentMenuItem: React.Dispatch<SetStateAction<Partial<IMenuItem> | null>>;
}

export const MenuItemContext = createContext({} as IMenuItemContext);

export const useMenuItemContext = () => useContext(MenuItemContext);
