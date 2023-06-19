import { createSlice } from "@reduxjs/toolkit";

import { AdminApi } from "../../api/Admin.api";
import { RestaurantApi } from "../../api/Restaurant.api";
import { IRestaurant } from "../../models";

const initialState = null as IRestaurant | null;

export const RestaurantReducer = createSlice({
	name: "restaurant",
	initialState,
	reducers: {
		clearRestaurant() {
			return null;
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(AdminApi.endpoints.login.matchFulfilled, (state, { payload }) => {
			return payload.admin.restaurant;
		});

		builder.addMatcher(RestaurantApi.endpoints.createRestaurant.matchFulfilled, (state, { payload }) => {
			return payload;
		});

		builder.addMatcher(RestaurantApi.endpoints.updateRestaurant.matchFulfilled, (state, { payload }) => {
			return payload;
		});
	},
});

export const { clearRestaurant } = RestaurantReducer.actions;
export default RestaurantReducer.reducer;
