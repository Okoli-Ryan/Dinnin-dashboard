import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
//@ts-ignore
import storage from "redux-persist/lib/storage";

import { TableApi } from "@/api/Table.api";
import { combineReducers, configureStore, ReducersMapObject } from "@reduxjs/toolkit";

import { AdminApi } from "../api/Admin.api";
import { ImageApi } from "../api/Image.api";
import { MenuCategoryApi } from "../api/MenuCategory.api";
import { MenuItemApi } from "../api/MenuItem.api";
import { RestaurantApi } from "../api/Restaurant.api";
import { VerificationApi } from "../api/Verification.api";
import AdminReducer from "./models/Admin.store";
import RestaurantReducer from "./models/Restaurant.store";

const API_LIST = [AdminApi, ImageApi, MenuCategoryApi, MenuItemApi, RestaurantApi, VerificationApi, TableApi];

const rootReducer = combineReducers({
	admin: AdminReducer,
	restaurant: RestaurantReducer,
	...API_LIST.reduce((reducers: ReducersMapObject, api) => {
		reducers[api.reducerPath] = api.reducer;
		return reducers;
	}, {}),
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
		...API_LIST.map((api) => api.middleware),
	],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
