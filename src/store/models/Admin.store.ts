import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { saveToken } from "../../core/Utils";
import { Admin, IAdmin } from "../../models";
import { AdminApi } from "../../services/Admin.api";
import { RestaurantApi } from "../../services/Restaurant.api";
import { VerificationApi } from "../../services/Verification.api";

const initialState = null as Admin | null;

export const AdminReducer = createSlice({
	name: "admin",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(AdminApi.endpoints.login.matchFulfilled, (state, { payload }) => {
			saveToken(payload.token);
			return payload.admin;
		});

		builder.addMatcher(RestaurantApi.endpoints.createRestaurant.matchFulfilled, (state, { payload }) => {
			state!.restaurant = payload;
		});
	},
});

export default AdminReducer.reducer;
