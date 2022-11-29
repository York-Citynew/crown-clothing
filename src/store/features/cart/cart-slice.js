import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (store, { payload }) => {
      const existingCartItem = store.cartItems.find(
        (item) => item.id === payload.id
      );
      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        store.cartItems.push({ ...payload, quantity: 1 });
      }
    },
    removeCartItem: (store, { payload }) => {
      const singleItem = payload.quantity === 1;
      if (singleItem) {
        store.cartItems = store.cartItems.filter(
          (cartItem) => cartItem.id !== payload.id
        );
      } else {
        const productToRemove = store.cartItems.find(
          (item) => item.id === payload.id
        );
        productToRemove.quantity -= 1;
      }
    },
    clearCartItem: (store, { payload }) => {
      store.cartItems = store.cartItems.filter(
        (cartItem) => cartItem.id !== payload.id
      );
    },
    setCartCountAndCartTotal: (store) => {
      const cartTotal = store.cartItems.reduce((acc, cartItem) => {
        acc += cartItem.quantity * cartItem.price;
        return acc;
      }, 0);
      const cartCount = store.cartItems.reduce((acc, cartItem) => {
        acc += cartItem.quantity;
        return acc;
      }, 0);
      store.cartCount = cartCount;
      store.cartTotal = cartTotal;
    },
    toggleIsCartOpen: (store) => {
      store.isCartOpen = !store.isCartOpen;
    },
  },
});

export default cartSlice.reducer;
export const {
  addCartItem,
  clearCartItem,
  removeCartItem,
  setCartCountAndCartTotal,
  toggleIsCartOpen,
} = cartSlice.actions;
