import { useState } from "react";

import { DeleteMenuCategoryContext } from "./DeleteMenuItemContext";

export const DeleteMenuItemProvider = ({ children }: { children: React.ReactNode }) => {
	const [deleteCategoryId, setDeleteCategoryId] = useState<string | null>(null);

	return <DeleteMenuCategoryContext.Provider value={{ deleteCategoryId, setDeleteCategoryId }}>{children}</DeleteMenuCategoryContext.Provider>;
};
