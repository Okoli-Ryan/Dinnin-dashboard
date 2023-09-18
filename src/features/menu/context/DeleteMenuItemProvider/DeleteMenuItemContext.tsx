import { createContext, SetStateAction, useContext } from "react";

interface IDeleteMenuItemContext {
	deleteItemId: string | null;
	setDeleteItemId: React.Dispatch<SetStateAction<string | null>>;
}

export const DeleteMenuItemContext = createContext({} as IDeleteMenuItemContext);

export const useDeleteMenuItemContext = () => useContext(DeleteMenuItemContext);
