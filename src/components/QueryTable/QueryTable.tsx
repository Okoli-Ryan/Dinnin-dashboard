import { Table, TableProps } from "antd";
import { useEffect, useState } from "react";

import { IQueryColumn } from "@/core/CommonTypes";
import { reportErrorMessage } from "@/core/Utils";
import { IListResponse } from "@/interfaces/IListResponse";
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, QueryDefinition } from "@reduxjs/toolkit/dist/query";
import { UseQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";

interface IQueryTable<F = any, T = any> extends TableProps<T> {
	filterParams?: F;
	columns?: IQueryColumn<T>;
	queryFn: UseQuery<
		QueryDefinition<F, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, string, IListResponse<T>, string>
	>;
}

export default function QueryTable({ filterParams, columns, queryFn, ...props }: IQueryTable) {
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);

	const {
		data: response,
		isFetching,
		error,
		isError,
	} = queryFn(
		{ page, size: pageSize, ...filterParams },
		{
			refetchOnMountOrArgChange: true,
		}
	);

	useEffect(() => {
		if (isError) reportErrorMessage(error, "Unable to fetch list");
	}, [isError]);

	return (
		<Table
			loading={isFetching}
			columns={columns}
			dataSource={response?.data || []}
			pagination={{
				current: response?.page,
				pageSize: response?.size,
				total: response?.total,
				defaultCurrent: 1,
				defaultPageSize: 10,
				onChange: (page, pageSize) => {
					setPage(page);
					setPageSize(pageSize);
				},
			}}
			{...props}
		/>
	);
}
