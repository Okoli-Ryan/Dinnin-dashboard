import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AdminApi } from "../../api/AdminApi/Admin.api";
import { RestaurantApi } from '../../api/Restaurant.api';
import { VerificationApi } from '../../api/Verification.api';
import { saveToken } from '../../core/Utils';
import { Admin, IAdmin } from '../../models';

const initialState = null as Admin | null;

export const AdminReducer = createSlice({
	name: "admin",
	initialState,
	reducers: {
		clearAdmin() {
			return null;
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(AdminApi.endpoints.login.matchFulfilled, (state, { payload }) => {
			return payload;
		});
	},
});

export const { clearAdmin } = AdminReducer.actions;
export default AdminReducer.reducer;
