import { IBaseModel } from "./BaseModel";
import { IRestaurant } from "./Restaurant";

export interface ITable extends IBaseModel {
	tableName: string;
	code: string;
	restaurantId: string;
	restaurant?: IRestaurant;
}
