import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";

import { AdminApi } from "../services/Admin.api";
import { RestaurantApi } from "../services/Restaurant.api";
import { VerificationApi } from "../services/Verification.api";
import AdminReducer from "./models/Admin.store";
import RestaurantReducer from "./models/Restaurant.store";

export const store = configureStore({
	reducer: {
		admin: AdminReducer,
		restaurant: RestaurantReducer,
		[AdminApi.reducerPath]: AdminApi.reducer,
		[RestaurantApi.reducerPath]: RestaurantApi.reducer,
		[VerificationApi.reducerPath]: VerificationApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(AdminApi.middleware).concat(RestaurantApi.middleware).concat(VerificationApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
