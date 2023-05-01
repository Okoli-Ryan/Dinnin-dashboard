import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Admin, IAdmin } from "../../models";
import { AdminApi } from "../../services/Admin.api";
import { VerificationApi } from "../../services/Verification.api";

const initialState = null as Admin | null;

export const AdminReducer = createSlice({
	name: "admin",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(AdminApi.endpoints.login.matchFulfilled, (state, { payload }) => {
			localStorage.setItem("dinning-token", payload.token);
			return payload.admin;
		});
	},
});

export default AdminReducer.reducer;
