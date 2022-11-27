import { configureStore } from "@reduxjs/toolkit";
import currentUserSlice from "./features/current-user/current-user-slice";
import categoriesSlice from "./features/categories/categories-slice";
import cartSlice from "./features/cart/cart-slice";

const store = configureStore({
  reducer: {
    currentUser: currentUserSlice,
    categories: categoriesSlice,
    cart: cartSlice,
  },
});

export default store;
