import React, { useState } from "react";

import { ITable } from "@/models";

export default function useSelectTable() {
	const [selectedTable, setSelectedTable] = useState<Partial<ITable> | null>(null);
	const [selectedDeleteTable, setSelectedDeleteTable] = useState<ITable | null>(null);

	function onShowTableModal(e: Partial<ITable> | null) {
		setSelectedTable(e);
	}

	function onCloseTableModal() {
		setSelectedTable(null);
	}

	function onCloseDeleteTableModal() {
		setSelectedDeleteTable(null);
	}

	function onSelectDeleteTable(e: ITable) {
		setSelectedDeleteTable(e);
	}

	return {
		selectedTable,
		selectedDeleteTable,
		onSelectDeleteTable,
		onShowTableModal,
		onCloseTableModal,
		onCloseDeleteTableModal,
	};
}
