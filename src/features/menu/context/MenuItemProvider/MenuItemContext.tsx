import { createContext, SetStateAction, useContext } from "react";

import { IMenuItem } from "../../../../models";

export type ICurrentMenuItem = (Partial<IMenuItem> & { inEditMode?: boolean }) | null;

interface IMenuItemContext {
	currentMenuItem: ICurrentMenuItem | null;
	setCurrentMenuItem: React.Dispatch<SetStateAction<ICurrentMenuItem>>;
}

export const MenuItemContext = createContext({} as IMenuItemContext);

export const useMenuItemContext = () => useContext(MenuItemContext);
