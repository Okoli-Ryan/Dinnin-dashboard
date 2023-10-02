import React from "react";

import { useDeleteTableMutation } from "@/api/Table.api";
import { reportErrorMessage } from "@/core/Utils";

import { IDeleteTableModal } from "./DeleteTableModal";

export default function useDeleteTableModal({ onDelete, onClose, selectedTable }: IDeleteTableModal) {
	const [deleteTableAsync, { isLoading }] = useDeleteTableMutation();

	async function deleteTable() {
		try {
			await deleteTableAsync(selectedTable!.id).unwrap();
			onDelete(selectedTable!);
			onClose();
		} catch (error) {
			reportErrorMessage(error, "Unable to delete Table");
		}
	}

	return { deleteTable, isOpen: !!selectedTable, onClose, isLoading };
}
