import { useState } from "react";

import { DeleteMenuCategoryContext } from "./DeleteMenuCategoryProvider";

export const DeleteMenuCategoryProvider = ({ children }: { children: React.ReactNode }) => {
	const [deleteCategoryId, setDeleteCategoryId] = useState<string | null>(null);

	return <DeleteMenuCategoryContext.Provider value={{ deleteCategoryId, setDeleteCategoryId }}>{children}</DeleteMenuCategoryContext.Provider>;
};
