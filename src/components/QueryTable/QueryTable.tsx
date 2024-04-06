import { Form, Table, TableProps } from "antd";
import { useEffect, useState } from "react";

import { IFilterData, IQueryColumn } from "@/core/CommonTypes";
import { reportErrorMessage } from "@/core/Utils";
import { IListResponse } from "@/interfaces/IListResponse";
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, QueryDefinition } from "@reduxjs/toolkit/dist/query";
import { UseQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";

import DateRangeButton from "../formComponents/DateRangePicker";
import FilterButton from "../formComponents/FilterButton";

interface IQueryTable<F = any, T = any> extends TableProps<T> {
	filterOptions?: IFilterData;
	extraParams?: F;
	header: string;
	columns?: IQueryColumn<T>;
	queryFn: UseQuery<
		QueryDefinition<F, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, string, IListResponse<T>, string>
	>;
}

export default function QueryTable({ extraParams = {}, filterOptions, columns, queryFn, header, ...props }: IQueryTable) {
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const [filterParams, setFilterParams] = useState<IFilterData>();
	const [form] = Form.useForm();
	const [dateRange, setDateRange] = useState<Record<string, Date | undefined>>({
		startDate: undefined,
		endDate: undefined,
	});

	const {
		data: response,
		isFetching,
		error,
		isError,
	} = queryFn(
		{ page, size: pageSize, ...dateRange, ...filterParams, ...extraParams },
		{
			refetchOnMountOrArgChange: true,
		}
	);

	useEffect(() => {
		if (isError) reportErrorMessage(error, "Unable to fetch list");
	}, [isError]);

	return (
		<div>
			<Form form={form}>
				<div className="flex items-center justify-between bg-lightGray/[15%] p-4 rounded-t-md">
					<h3 className="text-base font-semibold text-secondary">{header}</h3>
					<div className="flex items-center gap-3">
						<DateRangeButton className="mb-0" name="dateRange" onChange={(startDate, endDate) => setDateRange({ startDate, endDate })} />
						{filterOptions && <FilterButton filterOptions={filterOptions} onFilter={(e) => setFilterParams(e)} />}
					</div>
				</div>
			</Form>
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
		</div>
	);
}
