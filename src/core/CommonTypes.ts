import { TableProps } from "antd";

export type IQueryColumn<T> = TableProps<T>["columns"];

export interface IFilterItemOption {
	label: string;
	multiple: boolean;
	options: { label: string; name: string; value: string | number }[];
	fieldName: string;
}

export interface IFilterData {
	search?: { label: string; fieldName: string | number }[];
	filters?: IFilterItemOption[];
}
