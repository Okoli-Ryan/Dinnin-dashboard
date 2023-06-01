import { createSlice } from "@reduxjs/toolkit";

import { IRestaurant } from "../../models";
import { RestaurantApi } from "../../services/Restaurant.api";

const initialState = null as IRestaurant | null;

export const RestaurantReducer = createSlice({
	name: "restaurant",
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});

export default RestaurantReducer.reducer;
