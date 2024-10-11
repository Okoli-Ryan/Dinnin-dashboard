import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
//@ts-ignore
import storage from "redux-persist/lib/storage";

import { AnalyticsApi } from "@/api/AnalyticsApi/Analytics.api";
import { BaseAPI } from "@/api/common";
import { OrderApi } from "@/api/OrderApi";
import { PermissionApi } from "@/api/PermissionApi/Permission.api";
import { TableApi } from "@/api/Table.api";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { AdminApi } from "../api/AdminApi/Admin.api";
import { ImageApi } from "../api/Image.api";
import { MenuCategoryApi } from "../api/MenuCategory.api";
import { MenuItemApi } from "../api/MenuItem.api";
import { RestaurantApi } from "../api/Restaurant.api";
import { VerificationApi } from "../api/Verification.api";
import AdminReducer from "./models/Admin.store";
import RestaurantReducer from "./models/Restaurant.store";

const rootReducer = combineReducers({
	admin: AdminReducer,
	restaurant: RestaurantReducer,
	[AdminApi.reducerPath]: AdminApi.reducer,
	[ImageApi.reducerPath]: ImageApi.reducer,
	[MenuCategoryApi.reducerPath]: MenuCategoryApi.reducer,
	[RestaurantApi.reducerPath]: RestaurantApi.reducer,
	[VerificationApi.reducerPath]: VerificationApi.reducer,
	[MenuItemApi.reducerPath]: MenuItemApi.reducer,
	[TableApi.reducerPath]: TableApi.reducer,
	[OrderApi.reducerPath]: OrderApi.reducer,
	[AnalyticsApi.reducerPath]: AnalyticsApi.reducer,
	[PermissionApi.reducerPath]: PermissionApi.reducer,
});

const PersistConfig = {
	key: "root",
	storage,
	whitelist: ["admin", "restaurant"],
};

const persistedReducer = persistReducer(PersistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => [
		...getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
		BaseAPI.middleware,
	],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
