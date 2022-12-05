import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentUserSlice from "./features/current-user/current-user-slice";
import categoriesSlice from "./features/categories/categories-slice";
import cartSlice from "./features/cart/cart-slice";
import storage from "redux-persist/lib/storage/";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  //fix this
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  currentUser: currentUserSlice,
  categories: categoriesSlice,
  cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
