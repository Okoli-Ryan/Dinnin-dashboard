import { createContext, SetStateAction, useContext } from "react";

interface IDeleteMenuCategoryContext {
	deleteCategoryId: string | null;
	setDeleteCategoryId: React.Dispatch<SetStateAction<string | null>>;
}

export const DeleteMenuCategoryContext = createContext({} as IDeleteMenuCategoryContext);

export const useDeleteMenuCategoryContext = () => useContext(DeleteMenuCategoryContext);
