import { createContext, SetStateAction, useContext } from "react";

import { IMenuCategory } from "../../../../models";

export interface IMenuCategoryContext {
	currentMenuCategoryDetails: Partial<IMenuCategory> | null;
	setCurrentMenuCategoryDetails: React.Dispatch<SetStateAction<Partial<IMenuCategory> | null>>;
}

export const MenuCategoryContext = createContext({} as IMenuCategoryContext);

export const useMenuCategoryContext = () => useContext(MenuCategoryContext);
