export interface IApiResponseModel {
    responseCode: number;
    responseMessage: string;
    data: any
}

export type IResponseModel<T = any> = T | IApiResponseModel;