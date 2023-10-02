import React, { useEffect, useState } from 'react';

import { useGetTablesQuery } from '@/api/Table.api';
import { ITable } from '@/models/Table';
import { useAppSelector } from '@/store';

export default function useTables() {
	const { id: restaurantId } = useAppSelector((state) => state.restaurant)!;
	const { data = [], isLoading, fulfilledTimeStamp } = useGetTablesQuery(restaurantId);

	const [tableList, setTableList] = useState<ITable[]>([]);

	useEffect(() => {
		setTableList(data);
	}, [fulfilledTimeStamp]);

	function onAddTable(table: ITable) {
		setTableList((prev) => [...prev, table]);
	}

	function onEditTable(table: ITable) {
		setTableList((prev) => prev.map((e) => (e.id === table.id ? table : e)));
	}

	function onDeleteTable(table: ITable) {
		setTableList((prev) => prev.filter((e) => e.id !== table.id));
	}

	return { tableList, isLoading, onAddTable, onEditTable, onDeleteTable };
}
