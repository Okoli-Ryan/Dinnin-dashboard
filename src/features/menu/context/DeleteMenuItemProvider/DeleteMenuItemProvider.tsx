import { useState } from "react";

import { DeleteMenuItemContext } from "./DeleteMenuItemContext";

export const DeleteMenuItemProvider = ({ children }: { children: React.ReactNode }) => {
	const [deleteItemId, setDeleteItemId] = useState<string | null>(null);

	return <DeleteMenuItemContext.Provider value={{ deleteItemId, setDeleteItemId }}>{children}</DeleteMenuItemContext.Provider>;
};
