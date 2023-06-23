import { useState } from "react";

import { IMenuCategory } from "../../../../models";
import { IMenuCategoryContext, MenuCategoryContext } from "./MenuCategoryContext";

export const MenuCategoryProvider = ({ children }: { children: React.ReactNode }) => {
	const [currentMenuCategoryDetails, setCurrentMenuCategoryDetails] = useState<Partial<IMenuCategory> | null>(null);

	return <MenuCategoryContext.Provider value={{ currentMenuCategoryDetails, setCurrentMenuCategoryDetails }}>{children}</MenuCategoryContext.Provider>;
};
