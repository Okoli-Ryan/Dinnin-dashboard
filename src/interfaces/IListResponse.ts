export interface IListResponse<T> {
	total: number;
	size: number;
	data: T[];
	page: number;
}

export interface IBasePaginationRequest {
	page?: number;
	size?: number;
	minCreatedAt?: Date;
	maxCreatedAt?: Date;
}
